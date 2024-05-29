const RestaurantCategoryItems = ({ items }) => {
	console.log(items);
	return (
		<div className="p-3">
			{items.map((item) => (
				<div key={item.card.info.id} className="flex justify-between align-middle text-left m-4 gap-12 border-b-2">
					<div className="p-2">
                        <h4 className="font-medium">{item?.card?.info?.name}</h4>
                        <div>
                            <span className="text-xs">₹ {item?.card?.info?.price / 100}</span>
                            <p className="text-sm text-gray-500 mt-1.5">{item?.card?.info?.description}</p>
                        </div>
                    </div>
					<div className="bg-slate-300"></div>
				</div>
			))}
		</div>
	);
};

export default RestaurantCategoryItems;
