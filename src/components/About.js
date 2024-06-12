import Userclass from "./Userclass";
import React from "react";
import userContextFile from "../utils/userContextFile";

class About extends React.Component {
	constructor(props) {
		super(props);

		// console.log("Parent constructor");
	}

	componentDidMount() {
		// console.log("Parent component Did mount");
	}

	render() {
		// console.log("Parent render");

		return (
			<div>
				<h1>About Us Page</h1>
				<Userclass name={"Gaurav Daware"} location={"Nagpur"} />
				<userContextFile.Consumer>
					{({ loggedInUser }) => <h1>{loggedInUser}</h1>}
				</userContextFile.Consumer>
			</div>
		);
	}
}

export default About;
