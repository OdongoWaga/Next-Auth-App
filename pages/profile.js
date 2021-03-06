import { getUserProfile, authInitialProps } from "../lib/auth";
import React, { Component } from "react";
import Layout from "../components/Layout";

export default class Profile extends Component {
	state = {
		user: null
	};
	componentDidMount() {
		getUserProfile().then((user) => this.setState({ user }));
	}
	render() {
		return (
			<Layout title="Profile" {...this.props}>
				<pre>{JSON.stringify(this.state.user, null, 2)}</pre>
			</Layout>
		);
	}
}

Profile.getInitialProps = authInitialProps();
