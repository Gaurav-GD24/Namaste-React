import { useState, useEffect } from "react";

const useCheckInternetConnection = () => {
	// we want state Variable
	const [onlineStatus, setOnlineStatus] = useState(true);

	useEffect(() => {
        // set offline
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});
        // set online
		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});
	}, []);

    // return Boolean value true or False
	return onlineStatus;
};

export default useCheckInternetConnection;
