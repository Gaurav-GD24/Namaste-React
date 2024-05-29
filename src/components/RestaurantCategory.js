import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantCategory = ({ data }) => {
	// console.log(data);
	return (
		<div className=" py-2 px-8 w-full mt-3 bg-white rounded shadow">
			<div className="flex justify-between">
				<span className="font-medium text-gray-600">
					{data.title} ({data.itemCards.length})
				</span>
				<span>🔽</span>
			</div>
			<div>
				<RestaurantCategoryItems items={data.itemCards}/>
			</div>
		</div>
	);
};

export default RestaurantCategory;
