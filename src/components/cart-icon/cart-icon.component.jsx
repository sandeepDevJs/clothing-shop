import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
	CartIconStyles,
	ShoppingIconStyles,
	ItemCount,
} from "./cart-icon.styles";

const cartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div>
			<CartIconStyles onClick={toggleCartHidden}>
				<ShoppingIconStyles />
				<ItemCount>{itemCount}</ItemCount>
			</CartIconStyles>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
