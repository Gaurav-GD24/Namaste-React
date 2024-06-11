import { IMG_URL } from "../utils/constants";

const RestaurantCategoryItems = ({ items }) => {
	console.log(items);
	return (
		<div className="p-3">
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="flex justify-between items-center text-left gap-12 border-b-2 p-4"
				>
					<div className="w-1/2">
						<span className="font-medium">
							{item?.card?.info?.name}
						</span>
						<span className="font-semibold mx-3">
							₹ {item?.card?.info?.price / 100}
						</span>
						<div className="mt-4">
							<p className="text-sm text-gray-500 ">
								{item?.card?.info?.description}
							</p>
						</div>
					</div>
					<div className="aspect-square w-1/6 bg-slate-300 rounded-lg border relative">
						<img
							src={IMG_URL + item?.card?.info?.imageId}
							className="h-full w-full rounded-lg overflow-hidden object-cover object-top"
						/>
						<button className="px-4 py-1 rounded-xl bg-white text-black font-semibold text-sm absolute left-6 bottom-[6px] shadow-lg border-2">
							Add +
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default RestaurantCategoryItems;
