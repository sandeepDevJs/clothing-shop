import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./Stripe-button.styles.scss";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51InQNMSB6wy1AakhP1uKPFs15Oousn7ESSE1HVz18iVqDS31OKFCOyh5msUMPuwmztQXt752vcYyboOe64StOi6900lI2pTOpJ";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful!");
	};

	return (
		<StripeCheckout
			label={"Pay Now"}
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your Total Is $${price}`}
			amount={priceForStripe}
			panelLabel={"Pay Now"}
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
