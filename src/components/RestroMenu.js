import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestroMenu = () => {
	// creating State-variable
	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId);

		const json = await data.json();
		// console.log(json);
		// updating state variable with new data
		setResInfo(json.data);
	};

	if (resInfo === null) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;

	return (
		<div className="menu">
			<h2>{name}</h2>
			<p>{cuisines.join(", ")}</p>
			<h5>{costForTwoMessage}</h5>
			<br></br>
			<h5>Main Course</h5>
			{
				<ul>
					{itemCards.map((item) => (
						<li key={item.card.info.id}>
							{item.card.info.name}- Rs.
							{item.card.info.price / 100}
						</li>
					))}
				</ul>
			}
		</div>
	);
};

export default RestroMenu;
