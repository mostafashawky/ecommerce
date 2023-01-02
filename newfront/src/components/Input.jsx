import React from "react";

const Input = ({ className, ...props }) => {
	return <input className={`basic-style ${className}`} {...props} />;
};

export default Input;
