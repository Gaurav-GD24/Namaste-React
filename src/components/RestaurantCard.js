// RestaurantCard
const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
		resData?.info;

	return (
		<div className="w-[250px] h-[320px] bg-slate-100 p-2 text-ellipsis overflow-y-hidden">
			<div>
				<img
					className="rounded-lg  object-cover object-top aspect-[2/1.5]"
					src={
						"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
						cloudinaryImageId
					}
					alt="restaurant-img"
				></img>
			</div>
			<div className="mt-2">
				<h4 className="font-semibold text-lg">{name}</h4>
				<p>{cuisines.join(", ")}</p>
				<p>{costForTwo}</p>
				<p>{avgRating}</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
