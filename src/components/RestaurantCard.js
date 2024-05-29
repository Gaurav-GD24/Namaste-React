// RestaurantCard
const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
		resData?.info;

	return (
		<div className="w-[230px] h-[310px] rounded-lg bg-slate-100 hover:bg-slate-200 p-2  overflow-y-hidden">
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
// promoted Restaurant card

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label>Promoted</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
