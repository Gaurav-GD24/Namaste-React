import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import restaurantData from "./mockData.json/restaurantData.json";
import "@testing-library/jest-dom";

it("should render Restaurant card component with props data", () => {
	render(<RestaurantCard resData={restaurantData} />);

	const name = screen.getByText("Rasraj Restaurant");

	expect(name).toBeInTheDocument();
});
