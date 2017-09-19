import React, { Component } from 'react';
import LoginForm from './LoginForm';
import TaskBoard from './TaskBoard';



class Main extends Component {

	constructor(props) {
		super(props);

		// Setting state
		this.state = { token : '' };

		this.registerToken = this.registerToken.bind(this);
	}

	registerToken(returnedToken) {
		this.setState( { token : returnedToken } );
	}

	render() {
		let component = null;

		if (this.state.token === '') {
			component = <LoginForm onLogin={this.registerToken} />
		} else {
			component = <TaskBoard token={this.state.token} />
		}

		return component;
	}
}

export default Main;