import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestroMenu = () => {
	// creating State-variable
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9615398&lng=79.2961468&restaurantId=391654&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER"
		);

		const json = await data.json();
		// updating state variable with new data
		// console.log(json);
		setResInfo(json.data);
	};

	if (resInfo === null) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>{cuisines.join(", ")}</p>
			<h4>{costForTwoMessage}</h4>
		</div>
	);
};

export default RestroMenu;
