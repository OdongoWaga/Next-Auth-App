import { getUserProfile } from "../lib/auth";
import React, { Component } from "react";

export default class profile extends Component {
	state = {
		user: null
	};
	componentDidMount() {
		getUserProfile().then((user) => this.setState({ user }));
	}
	render() {
		return <pre>{JSON.stringify(this.state.user, null, 2)}</pre>;
	}
}
