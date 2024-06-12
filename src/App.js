import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import userContextFile from "./utils/userContextFile";
import { Provider } from "react-redux";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";

const AppLayout = () => {
	const [userName, setUsername] = useState();

	// suppose we fetch a new information about user and want to updated the information.
	useEffect(() => {
		// here hypothetically we get a info and stored it inside the data.
		const data = {
			name: "Gaurav D",
		};
		setUsername(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<userContextFile.Provider value={{ loggedInUser: userName }}>
				<main className="app__layout">
					<Header />
					<Outlet />
				</main>
			</userContextFile.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestroMenu />,
			},
		],
		errorElement: <Error />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
