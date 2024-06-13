import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="w-full md:w-3/5 mx-auto py-6 text-center font-semibold">
			<h1 className="text-xl font-semibold">Cart</h1>
            {cartItems.length === 0 && <h1 className="text-semibold py-6">Cart is Empty Add items to the cart</h1>}
			<div>
				<RestaurantCategoryItems items={cartItems} />
			</div>
			<button
				className="py-2 px-5 rounded-md text-white bg-red-400 border-none my-8 shadow-md"
				onClick={handleClearCart}
			>
				Clear-Cart
			</button>
		</div>
	);
};

export default CartPage;
