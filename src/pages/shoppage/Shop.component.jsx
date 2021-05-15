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

class Shop extends React.Component {
	unsubscribedFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionMap = convertCollectionsSnapShotToMap(snapshot);
			updateCollections(collectionMap);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewComponent}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
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
