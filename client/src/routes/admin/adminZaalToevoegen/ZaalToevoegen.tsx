import {
	Box, Button, FormGroup, TextField, Typography
} from '@mui/material';
import React, {
	useCallback
} from 'react';
import API from '../../../api/apiRoutes';

export default function ZaalToevoegen() {
	const handleForm = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form as HTMLFormElement);
		for (const value of formData.values()) {
			console.log(value);
		}

		API('zalen').Create({
			eersterangsAantal: parseFloat(formData.get('eersterang')as string),
			tweederangsAantal: parseFloat(formData.get('tweederang')as string),
			derderangsAantal: parseFloat(formData.get('derderang')as string),
			soort: formData.get('soort'),
		}).then((res) => {
			if (res.status !== 200) { 
				return;
			}
		});
	}, []);

	return (
		<Box
			sx={{
				p: 3
			}}
			component='form'
			id='form'
		>
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
				name='soort'
				required
				/>
				<TextField sx={{
					m: 1, mb: 2
				}}
				label='Aantal eersterangs stoelen'
				variant='standard'
				type='text'
				name='eersterang'
				required
				/>
				<TextField sx={{
					m: 1, mb: 2
				}} label='Aantal tweederangs stoelen'
				variant='standard' type='text'
				name='tweederang'
				required
				/>
				<TextField sx={{
					m: 1, mb: 3
				}} label='Aantal derderangs stoelen'
				variant='standard' type='text'
				name='derderang'
				required
				/>
				<Button variant='contained' type='submit'
					onClick={handleForm} sx={{
						my: 3
					}}>
					Toevoegen
				</Button>
			</FormGroup>
		</Box >
	);
}