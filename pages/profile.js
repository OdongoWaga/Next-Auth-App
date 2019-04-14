import { getUserProfile } from "../lib/auth";
import React, { Component } from "react";
import Layout from "../components/Layout";

export default class profile extends Component {
	state = {
		user: null
	};
	componentDidMount() {
		getUserProfile().then((user) => this.setState({ user }));
	}
	render() {
		return (
			<Layout title="Profile ">
				<pre>{JSON.stringify(this.state.user, null, 2)}</pre>
			</Layout>
		);
	}
}
