import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useCheckInternetConnection from "../utils/useCheckInternetConnection";
import userContextFile from "../utils/userContextFile";
import { useSelector } from "react-redux";

const Header = () => {
	const [reactBtn, setReactBtn] = useState("login");

	const onlineStatus = useCheckInternetConnection();

	// Inside the data variable we stored a context information with the help of 'useContext()' hook.
	const data = useContext(userContextFile);
	//
	const cart = useSelector((store) => store.cart.items);

	return (
		<div className="flex justify-between items-center p-8 border-b-2">
			<Link to="/" className="font-bold tracking-wide">
				FOOD
			</Link>
			<ul className="flex justify-between items-center gap-8">
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
				<li className="text-lg font-semibold">
					<Link to="/cart">Cart ({cart.length})</Link>
				</li>
				<button
					className="border-2 px-6 rounded-[4px] py-1  border-green-500"
					onClick={() => {
						reactBtn === "login"
							? setReactBtn("logout")
							: setReactBtn("login");
					}}
				>
					{reactBtn}
				</button>
			</ul>
			{/* add here we are using context data inside below list tag */}
			<li className="font-semibold border-2 rounded-lg p-2 list-none">
				{data.loggedInUser}
			</li>
		</div>
	);
};

export default Header;
