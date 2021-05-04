import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/Collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const Collection = ({ collections }) => {
	const { title, items } = collections;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapSateToProps = (state, ownProps) => ({
	collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapSateToProps)(Collection);
