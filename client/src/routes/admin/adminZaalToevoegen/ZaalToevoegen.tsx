import {
	Box, Button, Card, FormGroup, TextField, Typography 
} from '@mui/material';
import React, {
	useCallback 
} from 'react';
import API from '../../../api/apiRoutes';

export default function ZaalToevoegen() { 
	const [soort, setSoort] = React.useState('');
	const [eersterangs, setEersterangs] = React.useState('');
	const [tweederangs, setTweederangs] = React.useState('');
	const [derderangs, setDerderangs] = React.useState('');

	const handleSoort = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setSoort(e.target.value);
	}, []);
	const handleEersterangs = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEersterangs(e.target.value);
	}, []);
	const handleTweederangs = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTweederangs(e.target.value);
	}, []);
	const handleDerderangs = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDerderangs(e.target.value);
	}, []);
	/* const handleForm = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form as HTMLFormElement);
		for (const value of formData.values()) {
			console.log(value);
		}
		API('zalen').AkashaTestCreate().then((res: { status: number; }) => {
			if (res.status !== 200) {  }
		}); 
	}, []); */
	const handleData = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		API('zalen').AkashaTestCreate(soort, eersterangs, tweederangs, derderangs).then((res: { status: number; }) => {
			if (res.status !== 200) { /* empty */ }
		}); 
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
					onChange={handleSoort}
					value={soort}
					/>
					<TextField sx={{ 
						m: 1, mb: 2 
					}} 
					label='Aantal eersterangs stoelen' 
					variant='standard' 
					type='number' 
					name='omschrijving'
					required 
					onChange={handleEersterangs}
					value={eersterangs}
					/>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Aantal tweederangs stoelen'
					variant='standard' type='text'
					name='zaalnummer'
					required
					onChange={handleTweederangs}
					value={tweederangs}
					/>
					<TextField sx={{
						m: 1, mb: 3
					}} label='Aantal derderangs stoelen'
					variant='standard' type='text'
					name='prijs'
					required 
					onChange={handleDerderangs}
					value={derderangs}
					/>
					<Button variant='contained' type='submit'
						onClick={handleData} sx={{
							my:3
						}}>
				Toevoegen
					</Button>
				</FormGroup>
			</Card>
		</Box>
	);
}