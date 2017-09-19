import React, { Component } from 'react';
import logo from './images/tf_logo.jpg';
import { Label } from 'semantic-ui-react';
import 'semantic-ui/dist/semantic.min.css';


class TaskBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Label as='a' image>
    		<img src={logo} />
    		{this.props.token}
    		</Label>
			</div>
		);
	}
}


export default TaskBoard;