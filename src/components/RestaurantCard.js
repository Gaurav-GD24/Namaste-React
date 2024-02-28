// RestaurantCard
const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
		resData?.info;

	return (
		<div className="res-Card">
			<img
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
				alt="res-img"
			></img>
			<div className="res-Content">
				<h4>{name}</h4>
				<p>{cuisines.join(",")}</p>
				<p>{costForTwo}</p>
				<p>{avgRating}</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
