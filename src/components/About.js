import Userclass from "./Userclass";
import React from "react";

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
				<Userclass name={"Gaurav Daware(Class Based Component)"} location={"Nagpur"}/>
			</div>
		);
	}
}

export default About;
