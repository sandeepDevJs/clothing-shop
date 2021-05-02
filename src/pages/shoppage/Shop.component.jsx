import React from "react";
import { Route } from "react-router-dom";

import CollectionOverviewComponent from "../../components/collection-overview/Collection-overview.component";

import CollectionPage from "../collection/Collection.component";

const Shop = ({ match }) => {
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverviewComponent}
			/>
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default Shop;
