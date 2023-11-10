import React from "react";
import { NavBar } from "antd-mobile";
import { propTypes } from "prop-types";

//*对ui组件库中的NavBar进行二次封装
function NavBarComponent(props) {
	let { title } = props;
	const handleBack = () => {};

	return <NavBar onBack={handleBack}>{title}</NavBar>;
}

NavBarComponent.defaultProps = {
	title: "Personal center",
};
NavBarComponent.propTypes = {
	title: propTypes.string,
};
export default NavBarComponent;
