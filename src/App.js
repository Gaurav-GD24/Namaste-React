import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
	return (
		<main className="app__layout">
			<Header />
			<Body />
			{/* <Footer /> */}
		</main>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
