import { useState } from "react";
import { Link } from "react-router-dom";
import useCheckInternetConnection from "../utils/useCheckInternetConnection";

const Header = () => {
	const [reactBtn, setReactBtn] = useState("login");
	const onlineStatus = useCheckInternetConnection();
	return (
		<div className="container header">
			<a>logo</a>
			<ul>
				<li>Internet connection : {onlineStatus ? "✅" : "🟥"}</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
				<li>Cart</li>
			</ul>
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
