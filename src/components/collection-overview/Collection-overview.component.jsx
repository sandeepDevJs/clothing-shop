import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/Collection-preview.component";

import { selectShopCollections } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
