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
	, 
	Typography 
} from '@mui/material';

import UserContext, {
	level 
} from '../../../context/UserContext';

import { 
	useNavigate 
} from 'react-router-dom';

import API from '../../../api/apiRoutes';

function SignIn() {
	const { user, role } = React.useContext(UserContext);
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
		API('signin').Create(
			{
				email: email,
				password: password,
				persistentLogin: rememberMe,
			}
		).then((res) => {
			if(res.status == 200) {
				localStorage.setItem('token', res.data);
				
				user.setUser({
					id: res.data.id,
					naam: res.data.naam,
					email: email,
					token: res.data.token
				});

				role.setRole(res.data.role);
				
				navigate('/');
			}
		}).catch(() => {
			setErrorText('Invalid Credentials');
		});

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