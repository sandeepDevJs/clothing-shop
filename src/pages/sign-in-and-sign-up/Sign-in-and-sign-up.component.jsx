import React from "react";
import Signin from "../../components/sign-in/Sign-in.component";
import Signup from "../../components/sign-up/Sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndsignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<Signin />
			<Signup />
		</div>
	);
};

export default SignInAndsignUp;
