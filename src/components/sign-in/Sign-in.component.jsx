import React, { Component } from "react";
import CustomButton from "../custom-button/Custom-button.component";
import FormInput from "../form-input/Form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error(err);
		}
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I Already Have An Account</h2>
				<span>Sign In With Your Email & Password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						label="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						label="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
