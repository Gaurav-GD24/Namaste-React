import useFetchRestroInfo from "../utils/useFetchRestroInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

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
