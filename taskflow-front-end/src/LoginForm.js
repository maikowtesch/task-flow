import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
import 'semantic-ui/dist/semantic.min.css';

class LoginForm extends Component {
	
	constructor(props) {
		super(props); 

		this.state = { user:'' , password:'', loginButtonDisabled:true, loginButtonColor: 'grey',
		infoMessage: 'Log-in to your account', infoMessageColor: 'black' };

		this.onChangeLogin = this.onChangeLogin.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onClickLoginButton = this.onClickLoginButton.bind(this);
		this.onClickLoginButtonCallback = this.onClickLoginButtonCallback.bind(this);
		this.onClickLoginButtonError = this.onClickLoginButtonError.bind(this);
	}

	onChangeLogin(event) {
		this.enableLoginButton(event.target.value, this.state.password);

		this.setState({ user:event.target.value });
	}

	onChangePassword(event) {
		this.enableLoginButton(this.state.user, event.target.value);

		this.setState({ password:event.target.value });	
	}

	onClickLoginButton(event) {
		
		let data = new FormData();
		data.append('user', this.state.user);
		data.append('password', this.state.password);

		let request = {method: 'POST', body: data};

		fetch('http://localhost:8080/services/login', request)
			.then(this.checkStatus)
			.then((response) => { return response.json() })
			.then(this.onClickLoginButtonCallback)
			.catch(this.onClickLoginButtonError);
		
	}

	// Verify the response HTTP status
	checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			var error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	}

	onClickLoginButtonCallback(token) {
		// Login inválido
		if (token.token === '') {
			this.throwMessage('Invalid user name or password, please try again.');
		} else {
			this.props.onLogin(token);
		}
	}

	onClickLoginButtonError(ex) {
		this.throwMessage('Ops.. we\'re having technical problems, please contact administrator.');
	}

	// Enable LoginButton only if there are values for user and password
	enableLoginButton(user, password) {
		if (user !== '' && password !== '') {
			this.setState({ loginButtonDisabled:false, loginButtonColor:'teal' });
		} else {
			this.setState({ loginButtonDisabled:true, loginButtonColor:'grey' });
		}
	}

	throwMessage(message) {
		if (this.state.infoMessageColor === 'black') {
			this.timerID = setInterval(() => this.throwMessage(), 5000);

			this.setState({infoMessage: message, infoMessageColor: 'red'});
		} else {
			clearInterval(this.timerID);

			this.setState({infoMessage: 'Log-in to your account', infoMessageColor: 'black'});
		}
	}

	render() {
	    return (

	    	<div className='login-form'>
				{/*
				The styles below are necessary for the correct render of this example.
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
							Welcome to Task Flow!
						</Header>
						<Header as='h3' color={this.state.infoMessageColor} textAlign='center'>
							{this.state.infoMessage}
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

								{/*<Button color='teal' fluid size='large' disabled={this.state.loginButtonDisabled} onClick={this.onClickLoginButton}>Login</Button>*/}
								<Button color={this.state.loginButtonColor} fluid size='large' disabled={this.state.loginButtonDisabled} onClick={this.onClickLoginButton}>Login</Button>
							</Segment>
						</Form>
					</Grid.Column>
		        </Grid>
	    	</div>

	    );
	}
}

export default LoginForm;
