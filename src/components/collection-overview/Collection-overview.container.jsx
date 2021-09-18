import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import withSpinner from "../with-spinner/WithSpinner.component";
import CollectionOverview from "./Collection-overview.component";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
