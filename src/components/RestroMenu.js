import useFetchRestroInfo from "../utils/useFetchRestroInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestroMenu = () => {
	// creating State-variable
	const { resId } = useParams();

	const resInfo = useFetchRestroInfo(resId);

	if (resInfo === null) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
			?.card;

	// console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

	// create categories
	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) => {
				return (
					c.card?.card?.["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				);
			}
		);

	// console.log(categories);

	return (
		<div className="w-full md:w-3/5 mx-auto text-center py-2 leading-tight">
			<div className="p-4">
				<h2 className="font-bold text-lg">{name}</h2>
				<span className="text-gray-400">{cuisines.join(", ")}</span>
				<span className="text-gray-400 mx-2">{costForTwoMessage}</span>
			</div>

			<div className="bg-gray-100/50 rounded p-4">
				{categories.map((category) => (
					<RestaurantCategory data={category?.card?.card} />
				))}
			</div>
		</div>
	);
};

export default RestroMenu;
