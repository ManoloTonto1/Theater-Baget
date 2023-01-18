import {
	Box, Button, Card, FormGroup, TextField, Typography 
} from '@mui/material';
import React, {
	useCallback 
} from 'react';

export default function ZaalToevoegen() { 
	const handleForm = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form as HTMLFormElement);
		for (const value of formData.values()) {
			console.log(value);
		}
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
			<Card
				component = 'form'
				id='form'
				sx={{
					width: 280,
					p: 3
				}}>
				<FormGroup>
					<Typography variant="h5">
                Zaal toevoegen
					</Typography>
					<TextField sx={{ 
						m: 1, mb: 2 
					}} 
					label='Soort ruimte(theater of vrije ruimte)' 
					variant='standard' 
					type='text' 
					name='titel'
					required 
					/>
					<TextField sx={{ 
						m: 1, mb: 2 
					}} 
					label='Aantal eersterangs stoelen' 
					variant='standard' 
					type='text' 
					name='omschrijving'
					required 
					/>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Aantal tweederangs stoelen'
					variant='standard' type='text'
					name='zaalnummer'
					required
					/>
					<TextField sx={{
						m: 1, mb: 3
					}} label='Aantal derderangs stoelen'
					variant='standard' type='text'
					name='prijs'
					required 
					/>
					<Button variant='contained' type='submit'
						onClick={handleForm} sx={{
							my:3
						}}>
				Toevoegen
					</Button>
				</FormGroup>
			</Card>
		</Box>
	);
}