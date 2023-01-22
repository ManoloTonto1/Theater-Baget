import {
	Box, Button, Card, Divider, FormGroup, InputLabel, MenuItem, Select, TextField, Typography 
} from '@mui/material';
import React, {
	useCallback 
} from 'react';
import { 
	useNavigate 
} from 'react-router-dom';
import API from '../../../api/apiRoutes';
import UserContext, { 
	level 
} from '../../../context/UserContext';

function BetrokkeneToevoegen() {

	const [email, setEmail] = React.useState('');
	const [naam, setNaam] = React.useState('');
	const [selectedType, setSelectedType] = React.useState();

	const [errorText, setErrorText] = React.useState('');
	const [successText, setSuccessText] = React.useState('');
	
	const handleEmail = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, [setEmail]);

	const handleNaam = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNaam(e.target.value);
	}, [setNaam]);

	const handleSelectChange = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
		setSelectedType(e.target.value);
	}, [setSelectedType ]);

	const voegToe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await API('betrokkenen').Create({
			naam : naam,
			level: selectedType,
			loginGegevens: {
				email : email,
				twoFactor: false
			}
		}).then(async ()=> {
			setErrorText('');
			setSuccessText('Betrokkene toegevoegd');
		}).catch((err) => {
			setSuccessText('');
			setErrorText(err.response.data);
		});
	};

	return (
		<Box
			component = 'form'
			onSubmit={voegToe}
			sx={{
				p: 3
			}}>
			<FormGroup>
				
				<Typography color='red' align='center'>{errorText}</Typography>
				<Typography color='green' align='center'>{successText}</Typography>
				<Typography variant="h5">
                Betrokken toevoegen
				</Typography>
				<TextField sx={{ 
					mb: 2 
				}} 
				label='Naam' 
				variant='standard' 
				type='text' 
				required 
				onChange={handleNaam}
				value={naam}
				/>
				<TextField sx={{ 
					mb: 2 
				}} 
				label='E-mail' 
				variant='standard' 
				type='email' 
				required 
				onChange={handleEmail}
				value={email}
				/>
				<InputLabel>Type betrokkene</InputLabel>
				<Select
					variant='standard'
					value={selectedType}
					onChange={handleSelectChange}
					required
				>
					<MenuItem value={level.acteur}>Acteur</MenuItem>
					<MenuItem value={level.bandlid}>Bandlid</MenuItem>
					<MenuItem value={level.donateur}>Donateur</MenuItem>
				</Select>

				<Button variant='contained' type='submit'>
						Toevoegen
				</Button>
			</FormGroup>
		</Box>
	);
}
        
export default BetrokkeneToevoegen;