import {
	Box, Button, Card, Typography 
} from '@mui/material';
import React from 'react';

function ProgrammaToevoegen() {
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
				height: 80,
				p: 3
			}}>
				<Typography sx={{
					mb: 2
				}}>Programma uploaden (Excell)</Typography>
				<Button variant="contained" component="label">
                                Upload
					<input hidden accept="image/*"
						multiple type="file"
					/>
				</Button>
			</Card>
		</Box>
	);
}
        
export default ProgrammaToevoegen;