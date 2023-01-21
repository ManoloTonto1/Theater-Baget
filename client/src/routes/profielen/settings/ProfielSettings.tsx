import {
	Box,
	Button, FormGroup, TextField, Typography
} from '@mui/material';
import {
	DatePicker, LocalizationProvider 
} from '@mui/x-date-pickers';
import {
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import React, {
	useCallback 
} from 'react';
import {
	Form 
} from 'react-router-dom';
import UserContext from '../../../context/UserContext';

function ProfielSettings() {
	
	const { user } = React.useContext(UserContext);
	const userData = user.userData;

	console.log(userData);

	const [naam, setNaam] = React.useState(userData.naam);
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [geboorteDatum, setGeboorteDatum] = React.useState<Dayjs | null>(dayjs());
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [passwordsMatch, setPasswordsMatch] = React.useState(true);

	const handlePassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleEmail = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, []);

	const handleConfirmPassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setConfirmPassword(e.target.value);
	}, []);

	const handleNaam = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNaam(e.target.value);
	}, []);

	const saveSettings = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(password === confirmPassword) {

			// API('gebruiker').Create();
			console.log('saving');
		}
		setPasswordsMatch(false);
	}, []);

	return (
		<Box
			component={'form'}
			onSubmit={saveSettings}>

			<FormGroup>
				<Typography variant="h5">
                Gegevens aanpassen
				</Typography>
			
				<TextField sx={{ 
					m: 1, mb: 2 
				}} 
				label='Naam' 
				variant='standard' 
				type='text' 
				required 
				onChange={handleNaam}
				value={naam}
				/>

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
				value={email}
				/>

				<TextField sx={{
					m: 1, mb: 2 
				}} label='Nieuw wachtwoord'
				variant='standard' type='password'
				required onChange={handlePassword} 
				value={password}/>

				<TextField sx={{
					m: 1, mb: 3
				}} label='Nieuw wachtwoord bevestigen'
				variant='standard' type='password'
				required onChange={handleConfirmPassword}
				value={confirmPassword}
				error={!passwordsMatch} 
				helperText={!passwordsMatch ? 'Wachtwoorden komen niet overeen' : ''}
				/>

				<Button variant='contained' type='submit'>
				wijzigingen opslaan
				</Button>
			</FormGroup>
			
		</Box>
	);
}

export default ProfielSettings;