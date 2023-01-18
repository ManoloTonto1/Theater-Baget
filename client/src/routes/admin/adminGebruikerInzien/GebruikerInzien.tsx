import {
	Box, Card, TextField, Typography 
} from '@mui/material';
import React from 'react';

function GebruikerInzien() {
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
				p:3
			}}>
				<Typography>Gebruiker inzien</Typography>
				<TextField id="standard-basic" label="Naam"
					variant="standard" />
			</Card>
		</Box>
	);
}
        
export default GebruikerInzien;