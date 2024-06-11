import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	// console.log(data);
	const handleClick = () => {
		setShowIndex();
	};

	return (
		<div className=" py-2 px-8 w-full mt-3 bg-white rounded shadow">
			<div
				className="flex justify-between cursor-pointer"
				onClick={handleClick}
			>
				<span className="font-medium text-gray-600">
					{data.title} ({data.itemCards.length})
				</span>
				<span>🔽</span>
			</div>
			<div>
				{showItems && (
					<RestaurantCategoryItems items={data.itemCards} />
				)}
			</div>
		</div>
	);
};

export default RestaurantCategory;
