import React from "react";
import CollectionOverviewComponent from "../../components/collection-overview/Collection-overview.component";

const Shop = ({ collections }) => {
	return (
		<div className="shop-page">
			<CollectionOverviewComponent />
		</div>
	);
};

export default Shop;
