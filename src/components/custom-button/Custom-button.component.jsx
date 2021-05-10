import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const customButton = (props) => {
	return (
		<CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
	);
};

export default customButton;
