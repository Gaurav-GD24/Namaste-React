import React from "react";

class Userclass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Default",
			},
		};

		// console.log("child constructor called");
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/Gaurav-GD24");
		const json = await data.json();
        console.log(json);
		this.setState({
			userInfo: json,
		});
	}
    
	render() {
		// console.log("child render called");
        const{name , bio } = this.state.userInfo;

		return (
			<div className="user-card">
				<h3>{name}</h3>
				<h3>bio: {bio}</h3>
				<h4>Contact: @gaurav</h4>
			</div>
		);
	}
}

export default Userclass;
