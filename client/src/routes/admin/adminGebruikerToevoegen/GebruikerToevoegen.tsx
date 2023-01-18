import {
	Box, Button, Card, FormGroup, TextField, Typography 
} from '@mui/material';
import {
	LocalizationProvider, DatePicker 
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

function GebruikerToevoegen() {
	const [naam, setNaam] = React.useState('');
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
	return (
		<Box sx={{
			display: 'flex',
			justifyItems: 'center',
			alignItems: 'center',
			alignContent: 'center',
			flexDirection: 'column',
			flexWrap: 'nowrap'
		}}>
			<Card sx={{
				width: 250,
				p: 3
			}}>
				<FormGroup>
					<Typography variant="h5">
                Gebruiker toevoegen
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
					value={email}/>

					<TextField sx={{
						m: 1, mb: 2 
					}} label='Wachtwoord'
					variant='standard' type='password'
					required onChange={handlePassword} 
					value={password}/>

					<TextField sx={{
						m: 1, mb: 3
					}} label='Wachtwoord bevestigen'
					variant='standard' type='password'
					required onChange={handleConfirmPassword}
					value={confirmPassword}
					error={!passwordsMatch} 
					helperText={!passwordsMatch ? 'Wachtwoorden komen niet overeen' : ''}
					/>

					<Button variant='contained' type='submit'>
				Toevoegen
					</Button>
				</FormGroup>
			</Card>
		</Box>
	);
}
        
export default GebruikerToevoegen;