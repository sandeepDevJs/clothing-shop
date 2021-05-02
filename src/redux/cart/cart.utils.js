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

export const removeItemFromCart = (cartItems, itemToRemove) => {
	const isExistingCartItem = cartItems.find(
		(item) => item.id === itemToRemove.id
	);

	if (isExistingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== itemToRemove.id);
	}

	return cartItems.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};
