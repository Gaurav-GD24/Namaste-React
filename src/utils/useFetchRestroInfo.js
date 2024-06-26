import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useFetchRestroInfo = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId);

		const json = await data.json();
		// console.log(json);
		// updating state variable with new data
		setResInfo(json.data);
	};

    return resInfo;
};

export default useFetchRestroInfo;
