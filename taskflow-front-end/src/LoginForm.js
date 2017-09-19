import React, { Component } from 'react';
import logo from './images/tf_logo.jpg';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
import 'semantic-ui/dist/semantic.min.css';

class LoginForm extends Component {
	
	constructor(props) {
		super(props);

		this.state = { user:'' , password:'' };

		this.onChangeLogin = this.onChangeLogin.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onClickLoginButton = this.onClickLoginButton.bind(this);
	}

	onChangeLogin(event) {
		this.setState({ user:event.target.value });
	}

	onChangePassword(event) {
		this.setState({ password:event.target.value });	
	}

	onClickLoginButton(event) {
		
		//
		// PENDING
		// ON THIS POINT IMPLEMENT COMMUNICATION WITH THE SERVER
		//

		this.props.onLogin(this.state.user + '-' + this.state.password);
	}

	render() {
	    return (

	    	<div className='login-form'>
				{/*
				Heads up! The styles below are necessary for the correct render of this example.
				You can do same with CSS, the main idea is that all the elements up to the `Grid`
				below must have a height of 100%.
				*/}
				<style>{`
					body > div,
					body > div > div.login-form { height: 100%; }
				`}</style>

		        <Grid
					textAlign='center'
					style={{ height: '100%' }}
					verticalAlign='middle'
		        >
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='black' textAlign='center'>
							<Image src={logo} />
							{' '}Log-in to your account
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									placeholder='User name/E-mail address'
									onChange={this.onChangeLogin}
								/>
								<Form.Input
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
									onChange={this.onChangePassword}
								/>

								<Button color='teal' fluid size='large' onClick={this.onClickLoginButton}>Login</Button>
							</Segment>
						</Form>
						{/*<Message>
						  New to us? <a href='#'>Sign Up</a>
						</Message>*/}
					</Grid.Column>
		        </Grid>
	    	</div>

	    );
	}
}

export default LoginForm;
