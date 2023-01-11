import React, {
	useCallback
} from 'react';

import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Link,
	Slide,
	TextField
} from '@mui/material';

import UserContext from '../../../context/UserContext';

import {
	buildRequestParams 
} from '../../../components/RequestBuilder';

import { 
	useNavigate 
} from 'react-router-dom';
import { 
	Typography 
} from '@mui/material';

function SignIn() {
	const { user } = React.useContext(UserContext);
	const navigate = useNavigate();
	
	// general values
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [rememberMe, setRememberMe] = React.useState(false);
	const [errorText, setErrorText] = React.useState('');

	const handlePassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleEmail = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, []);

	const signIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		(async () => {

			const params = buildRequestParams({
				email: email,
				password: password,
				persistentLogin: rememberMe,
			});

			const request = await fetch(`api/signin?${params}`, {
			  method: 'POST'
			});

			const response = await request.json();
		  
			if(response != 'Invalid Credentials') {
				
				user.setUser({
					email: email,
					persistentLogin: rememberMe,
					token: response
				});
				
				navigate('/');
			} else {
				setErrorText(response);
			}
		})();

	};

	return (
		<Slide
			in
			direction='left'
		>
			<Box
				component={'form'}
				onSubmit={signIn}
				sx={{
					p: 2
				}}>
				<Typography color='red' align='center'>{errorText}</Typography>
				<FormGroup sx={{
					'& .MuiTextField-root': {
						m: 1
					}, textAlign: 'center'
				}}>
					<TextField sx={{
						mb: 2
					}}
					label='E-mail adres'
					variant='standard' type='email'
					required onChange={handleEmail}
					value={email}
					error={errorText?true:false}
					/>

					<TextField sx={{
						mb: 2
					}}
					label='Wachtwoord'
					variant='standard'
					type='password'
					onChange={handlePassword}
					value={password}
					error={errorText?true:false}
					required
					/>

					<FormControlLabel sx={{
						mb: 2
					}}

					control={
						<Checkbox
							checked={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
						/>}
					label='Aangemeld blijven'
					/>

					<Button
						variant='contained'
						color='secondary'
						type='submit'>
						sign in
					</Button>

					<Link sx={{
						cursor: 'pointer',
						mt: 4
					}}
					color='#0d99ff'>
						Wachtwoord vergeten?
					</Link>
				</FormGroup>
			</Box>
		</Slide>

	);
}

export default SignIn;