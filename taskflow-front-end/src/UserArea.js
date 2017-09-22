import React, { Component } from 'react';
import { Container, Grid, Menu, Segment, Button, Header } from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';
import TaskBoard from './TaskBoard'
import ManagedTasks from './ManagedTasks'
import NewTask from './NewTask'


class UserArea extends Component {
	constructor(props) {
		super(props);

		this.state = { itemMenu: 1 };

		this.logout = this.logout.bind(this);
		this.menu1Click = this.menu1Click.bind(this);
		this.menu2Click = this.menu2Click.bind(this);
		this.menu3Click = this.menu3Click.bind(this);		
	}

	logout(event) {
		this.props.onLogout();
	}

	menu1Click(event) {
		this.setState({ itemMenu: 1 });
	}
	menu2Click(event) {
		this.setState({ itemMenu: 2 });
	}
	menu3Click(event) {
		this.setState({ itemMenu: 3 });
	}

	render() {
		let tab = null;

		switch(this.state.itemMenu) {
			case 1: tab = <TaskBoard />; break;
			case 2: tab = <ManagedTasks />; break;
			case 3: tab = <NewTask />; break;
		}
		
		return (
			<div>
				<Segment
						inverted
						textAlign='center'
						style={{ padding: '1em 0em' }}
						vertical>
					<Container>
					<Menu inverted  size='large'>
						<Menu.Item as='h3' header>Task Flow</Menu.Item>
						
						<Menu.Item as='a' onClick={this.menu1Click} >Task Board</Menu.Item>
						<Menu.Item as='a' onClick={this.menu2Click} >Managed Tasks</Menu.Item>
						<Menu.Item as='a' onClick={this.menu3Click} >New Task</Menu.Item>
						
						<Menu.Item position='right'>Welcome, {this.props.token.userName} ({this.props.token.userRoleDesc})</Menu.Item>
						<Menu.Item position='right'>
						<Button as='a' inverted basic onClick={this.logout}>Log out</Button>
						</Menu.Item>
					</Menu>
					</Container>
				</Segment>

				<Segment style={{ padding: '5em 0em' }} vertical>
					{tab}
				</Segment>

			</div>
		);
	}
}






export default UserArea;