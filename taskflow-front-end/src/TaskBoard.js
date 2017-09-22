import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';


class TaskBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column >
						
						<Header as='h3' style={{ fontSize: '2em' }}>Task Board</Header>
						
						<p style={{ fontSize: '1.33em' }}>
						In this tab, the team member will be able to visualize and update all tasks attributed to him. He can also collaborate with members of 
						other teams in the tasks he is participating.
						</p>

						<Header as='h3' style={{ fontSize: '2em' }}>Managed Tasks</Header>
						
						<p style={{ fontSize: '1.33em' }}>
						This tab is exclusive for the team leader. Here he can visualize all tasks attributed to members of his team. He also can see how members 
						of other team are cooperating with the resolution of the tasks, acting as an observer and moderator.
						</p>

						<Header as='h3' style={{ fontSize: '2em' }}>New Task</Header>
						
						<p style={{ fontSize: '1.33em' }}>
						Here the team member can report a new task. This is the entry point of the workflow.
						</p>

					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default TaskBoard;
