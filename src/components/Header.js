import { useState } from "react";
import { Link } from "react-router-dom";
//Header
const navItems = (
	<ul>
		<li>Home</li>
		<li>
			<Link to="/about">About Us</Link>
		</li>
		<li>
			<Link to="/contact">Contact Us</Link>
		</li>
		<li>Cart</li>
	</ul>
);

const Header = () => {
	const [reactBtn, setReactBtn] = useState("login");

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
