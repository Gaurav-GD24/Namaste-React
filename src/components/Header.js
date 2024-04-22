import { useState, useEffect } from "react";
//Header
const navItems = (
	<ul>
		<li>about</li>
		<li>explore</li>
		<li>contact</li>
	</ul>
);

const Header = () => {
	const [reactBtn, setReactBtn] = useState("login");

	console.log("Header called");

	useEffect(() => {
		console.log("useEffect called");
	}, []);


	return (
		<div className="container header">
			<a>logo</a>
			{navItems}
			<button
				className="login"
				onClick={() => {
					reactBtn === "login"
						? setReactBtn("logout")
						: setReactBtn("login");
				}}
			>
				{reactBtn}
			</button>
		</div>
	);
};

export default Header;
