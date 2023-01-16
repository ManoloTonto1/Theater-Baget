import {
	Box, Button, Card, TextField, Typography 
} from '@mui/material';
import React from 'react';

function GebruikerToevoegen() {
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
				<Typography>Gebruiker toevoegen</Typography>
				<TextField id="standard-basic" label="Naam"
					variant="standard" />
				<TextField id="standard-basic" label="Geboortedatum"
					variant="standard" />
				<TextField id="standard-basic" label="E-Mail"
					variant="standard" />
				<TextField id="standard-basic" label="Wachtwoord"
					variant="standard" />
				<TextField id="standard-basic" label="Wachtwoord bevestigen"
					variant="standard" />
				<Button variant="contained" sx={{
					mt:2
				}}>Gebruiker toevoegen</Button>
			</Card>
		</Box>
	);
}
        
export default GebruikerToevoegen;