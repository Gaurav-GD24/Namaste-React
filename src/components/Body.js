import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useCheckInternetConnection from "../utils/useCheckInternetConnection";

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState("");

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		setListOfRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	// check Online Status
	const onlineStatus = useCheckInternetConnection();

	if (onlineStatus === false) {
		return (
			<h1>
				Looks like you are offline!, Please check Your internet
				connection.
			</h1>
		);
	}
	// -------------------
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="container body">
			<div className="flex gap-8 items-center">
				<div className="search">
					<input
						type="text"
						className="m-4 border-2 rounded-sm"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="rounded-[6px] px-4 py-[1.5px] bg-green-500 text-white text-center"
						onClick={() => {
							// filter the Restaurant and update the UI
							const filteredRestaurant = listOfRestaurant.filter(
								(res) => {
									return res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase());
								}
							);

							setFilteredRestaurant(filteredRestaurant);
						}}
					>
						Search
					</button>
				</div>

				<button
					className="bg-green-500 px-4 py-[1.5px] text-white rounded-[6px]"
					onClick={() => {
						const filterLogic = listOfRestaurant.filter((res) => {
							return res.info.avgRating > 4;
						});
						setFilteredRestaurant(filterLogic);
					}}
				>
					Top Restaurants
				</button>
			</div>
			<div className="flex flex-wrap gap-6 justify-center p-10">
				{filteredRestaurant.map((restaurant) => (
					<Link
						to={"/restaurants/" + restaurant.info.id}
						key={restaurant.info.id}
					>
						{restaurant.info.promoted ? (
							<RestaurantCardPromoted resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
