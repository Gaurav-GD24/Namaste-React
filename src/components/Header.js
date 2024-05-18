import { useState } from "react";
import { Link } from "react-router-dom";
import useCheckInternetConnection from "../utils/useCheckInternetConnection";

const Header = () => {
	const [reactBtn, setReactBtn] = useState("login");
	const onlineStatus = useCheckInternetConnection();
	return (
		<div className="flex justify-between items-center p-8 border-b-2">
			<a>logo</a>
			<ul className="flex justify-between gap-8">
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
			<button className="border-2 px-6 rounded-[4px] py-1  border-green-500"
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
