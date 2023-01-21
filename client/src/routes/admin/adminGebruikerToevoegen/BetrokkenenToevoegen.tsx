import {
	Box, Button, Card, Divider, FormGroup, TextField, Typography 
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
import API from '../../../api/apiRoutes';
import UserContext from '../../../context/UserContext';

function GebruikerToevoegen() {
	const { user, role } = React.useContext(UserContext);
	const [naam, setNaam] = React.useState('');
	const [geboorteDatum, setGeboorteDatum] = React.useState<Dayjs | null>(dayjs());
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
    
	const handlePassword = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, []);
    
	const handleEmail = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, []);
    
	const handleNaam = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNaam(e.target.value);
	}, []);
	
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

	const maakNieuw = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const leeftijdsGroep = getLeeftijdsGroep(geboorteDatum.$y);
		await API('betrokkenen').Create({
			naam : naam,
			leeftijdsGroep : leeftijdsGroep,
			level : 1,
			loginGegevens: {
				wachtwoord : password,
				email : email,
				twoFactor: false
			}
		}).then((res)=> {
			setErrorText(res.data);
		}).catch((err) => {
			setErrorText(err.response.data);
		});
			
	};

	const voegToe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('voegtoe');
	};

	return (
		<Box
			sx={{
				p: 3
			}}>
			<Typography color='red' align='center'>{errorText}</Typography>
			<Box
				component = 'form'
				onSubmit={voegToe}>

				<FormGroup>
					<Typography variant="h5">
                Betrokken toevoegen aan groep
					</Typography>

					<Button variant='contained' type='submit'>
						Toevoegen
					</Button>
				</FormGroup>
			</Box>

			<Divider sx={{
				mt:4,
				mb:4,
			}}>OF</Divider>
			<Box
				component = 'form'
				onSubmit={maakNieuw}>

				<FormGroup>
					<Typography variant="h5">
                Betrokken aanmaken
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

					<Button variant='contained' type='submit'>
				Toevoegen
					</Button>
				</FormGroup>
			</Box>
		</Box>
	);
}
        
export default GebruikerToevoegen;