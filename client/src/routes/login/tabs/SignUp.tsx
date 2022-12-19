import {
	Box, Button, Checkbox, FormControlLabel, FormGroup, TextField 
} from '@mui/material';

import { 
	DatePicker, 
	LocalizationProvider 
} from '@mui/x-date-pickers';

import dayjs, { 
	Dayjs 
} from 'dayjs';

import { 
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';

import React, { 
	useCallback 
} from 'react';

function SignUp () {

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

	const signUp = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let error = false;
		if(password != confirmPassword) {
			setPasswordsMatch(false);
			error = true;
			return;
		}

		if(!error) {

			// logs voor testen
			console.log(voornaam);
			console.log(tussenvoegsel);
			console.log(achternaam);
			console.log(geboorteDatum);
			console.log(email);
			console.log(password);
			console.log(confirmPassword);
			console.log(rememberMe);
		}
	}, [achternaam, confirmPassword, email, geboorteDatum, password, rememberMe, tussenvoegsel, voornaam]);

	const handlePassword = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleEmail = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	}, []);

	const handleConfirmPassword = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setConfirmPassword(e.target.value);
		console.log(e.target.value);
	}, []);

	const handleVoornaam = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setVoornaam(e.target.value);
		console.log(e.target.value);
	}, []);
	
	const handleTussenvoegsel = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTussenvoegsel(e.target.value);
		console.log(e.target.value);
	}, []);
	
	const handleAchternaam = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setAchternaam(e.target.value);
		console.log(e.target.value);
	}, []);

	return (

		<form onSubmit={signUp}>

			<Box sx={{ 
				p: 2 
			}}>
				<FormGroup>
					<Box sx={{
						'& .MuiTextField-root': { 
							m: 1, 
							width: '29%' 
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
						/>

						<TextField sx={{ 
							mb: 2 
						}} 
						label='Tussenvg' 
						variant='standard' 
						type='text' 
						onChange={handleTussenvoegsel}
						/>

						<TextField sx={{ 
							mb: 2 
						}} 
						label='Achternaam' 
						variant='standard' 
						type='text' 
						required 
						onChange={handleAchternaam}
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
					required onChange={handleEmail} />
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Wachtwoord'
					variant='standard' type='password'
					required onChange={handlePassword} />
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Wachtwoord bevestigen'
					variant='standard' type='password'
					required onChange={handleConfirmPassword}
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
		</form>
	);
}

export default SignUp;