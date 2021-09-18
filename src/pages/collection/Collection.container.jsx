import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionComponent from "./Collection.component";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionComponent);

export default CollectionContainer;
