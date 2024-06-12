import { createContext } from "react";

// here we have created a userContextFile with the help of 'useContext()' hook.
const userContextFile = createContext({
	loggedInUser: "Default User",
});

export default userContextFile;
