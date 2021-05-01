export const addCartToItem = (cartItems, cartItemToAdd) => {
	const isExistingCartItem = cartItems.find(
		(item) => item.id === cartItemToAdd.id
	);
	if (isExistingCartItem) {
		return cartItems.map((item) =>
			item.id === cartItemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	} else {
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
};
