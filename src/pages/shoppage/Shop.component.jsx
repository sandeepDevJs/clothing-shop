import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewComponent from "../../components/collection-overview/Collection-overview.component";

import CollectionPage from "../collection/Collection.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
	firestore,
	convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverviewComponent);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
	state = {
		loading: true,
	};

	unsubscribedFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionMap = convertCollectionsSnapShotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
