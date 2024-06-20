import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load the header component", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByText("login")

	expect(loginButton).toBeInTheDocument();
});
