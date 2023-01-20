import {
	Box, Button, Checkbox, FormControlLabel, FormGroup, Slide, TextField, Typography 
} from '@mui/material';

import { 
	DatePicker, 
	LocalizationProvider 
} from '@mui/x-date-pickers';

import type { 
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';

import { 
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';

import React, { 
	useCallback 
} from 'react';

import UserContext from '../../../context/UserContext';
import API from '../../../api/apiRoutes';
import {
	useNavigate 
} from 'react-router-dom';

function SignUp () {
	const { user, role } = React.useContext(UserContext);
	const navigate = useNavigate();

	// general values
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [rememberMe, setRememberMe] = React.useState(false);
	const [acceptPolicy, setAcceptPolicy] = React.useState(false);
	
	// sign up specifieke credentials
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [geboorteDatum, setGeboorteDatum] = React.useState<Dayjs | null>(dayjs());
	
	const [voornaam, setVoornaam] = React.useState('');
	const [tussenvoegsel, setTussenvoegsel] = React.useState('');
	const [achternaam, setAchternaam] = React.useState('');
	
	const [passwordsMatch, setPasswordsMatch] = React.useState(true);

	const [errorText, setErrorText] = React.useState('');

	const getLeeftijdsGroep = (birthYear:any) => {
		const estimatedAge = new Date().getFullYear() - birthYear;

		if(estimatedAge < 18) {
			return 1;
		}
		if(estimatedAge < 50) {
			return 2;
		}
		return 3;
	};

	const signUp = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password === confirmPassword) {

			const fullName = `${voornaam}${(tussenvoegsel) ? ' '+tussenvoegsel : ''} ${achternaam}`;
			const leeftijdsGroep = getLeeftijdsGroep(geboorteDatum.$y);
			await API('signup').Create({
				naam : fullName,
				leeftijdsGroep : leeftijdsGroep,
				level : 1,
				loginGegevens: {
					wachtwoord : password,
					email : email,
					twoFactor: false
				}
			}).then(async ()=> {
				await API('signin').Create({
					email: email,
					password: password,
					persistentLogin: false,
				}).then((res)=> {
					localStorage.setItem('token', res.data.token);
					user.setUser({
						id: res.data.gebruiker.id,
						naam: res.data.gebruiker.naam,
						email: email,
						ageGroup: res.data.gebruiker.leeftijdsGroep,
						token: res.data.token
					});

					role.setRole(res.data.role);
					navigate('/');
				}).catch(()=>{
					setErrorText('Er is iets misgegaan bij het inloggen, probeer het later opnieuw');
				});
			}).catch((err) => {
				setErrorText(err.response.data);
			});
			return;
		}
		setPasswordsMatch(false);
	}, [confirmPassword, password]);

	const handlePassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, [setPassword]);

	const handleEmail = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, [setEmail]);

	const handleConfirmPassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setConfirmPassword(e.target.value);
	}, [setConfirmPassword]);

	const handleVoornaam = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setVoornaam(e.target.value);
	}, [setVoornaam]);
	
	const handleTussenvoegsel = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTussenvoegsel(e.target.value);
	}, [setTussenvoegsel]);
	
	const handleAchternaam = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setAchternaam(e.target.value);
	}, [setAchternaam]);

	return (

		<Slide
			in
			direction='right'
		>
			<Box
				onSubmit={signUp}
				component='form'
				sx={{ 
					p: 2 
				}}>
				<Typography color='red' align='center'>{errorText}</Typography>
				<FormGroup>
					<Box sx={{
						'& .MuiTextField-root': { 
							m: '5px',
							width: '27%' 
						},
					}}>

						<TextField sx={{ 
							mb: 2 
						}} 
						label='Voornaam' 
						variant='standard' 
						type='text' 
						required 
						onChange={handleVoornaam}
						value={voornaam}
						/>

						<TextField sx={{ 
							mb: 2 
						}} 
						label='Tussenvg' 
						variant='standard' 
						type='text' 
						onChange={handleTussenvoegsel}
						value={tussenvoegsel}
						/>

						<TextField sx={{ 
							mb: 2 
						}} 
						label='Achternaam' 
						variant='standard' 
						type='text' 
						required 
						onChange={handleAchternaam}
						value={achternaam}
						/>

					</Box>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Geboorte datum"
							value={geboorteDatum}
							onChange={(newValue) => {
								setGeboorteDatum(newValue);
							}}
							renderInput={(params) => <TextField sx={{
								m:1
							}} variant='standard'
							{...params} />}
						/>
					</LocalizationProvider>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='E-mail adres'
					variant='standard' type='email'
					required onChange={handleEmail} 
					value={email}/>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Wachtwoord'
					variant='standard' type='password'
					required onChange={handlePassword} 
					value={password}/>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Wachtwoord bevestigen'
					variant='standard' type='password'
					required onChange={handleConfirmPassword}
					value={confirmPassword}
					error={!passwordsMatch} 
					helperText={!passwordsMatch ? 'Wachtwoorden komen niet overeen' : ''}
					/>

					<FormControlLabel sx={{
						mb: 2 
					}} control={<Checkbox checked={rememberMe} 
						onChange={() => setRememberMe(!rememberMe)} />}
					label='Aangemeld blijven' />
					<FormControlLabel sx={{
						mb: 2 
					}} control={<Checkbox checked={acceptPolicy} 
						onChange={() => setAcceptPolicy(!acceptPolicy)}
						required 	/>}
					label='Ik accepteer de privacy policy' />
					<Button variant='contained' color='secondary'
						type='submit'>sign up</Button>
				</FormGroup>
			</Box>
		</Slide>
	);
}

export default SignUp;