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
import UploadImageCard from '../adminProgramma/ImageUpload';

function ProgrammaToevoegen() {
	const [voorstellingDatum, setVoorstellingDatum] = React.useState<Dayjs | null>(dayjs());
    
	const handleForm = useCallback(async (e) => {
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
					width: 250,
					p: 3
				}}>
				<FormGroup>
					<Typography variant="h5">
                Programma toevoegen
					</Typography>
					<TextField sx={{ 
						m: 1, mb: 2 
					}} 
					label='Titel' 
					variant='standard' 
					type='text' 
					name='titel'
					required 
					/>
					<TextField sx={{ 
						m: 1, mb: 2 
					}} 
					label='Omschrijving' 
					variant='standard' 
					type='text' 
					name='omschrijving'
					required 
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Datum voorstelling"
							value={voorstellingDatum}
							onChange={(newValue) => {
								setVoorstellingDatum(newValue);
							}}
							renderInput={(params) => <TextField sx={{
								m:1
							}} variant='standard'
							{...params} />}
						/>
					</LocalizationProvider>
					<TextField sx={{
						m: 1, mb: 2 
					}} label='Zaalnummer'
					variant='standard' type='text'
					name='zaalnummer'
					required
					/>
					<TextField sx={{
						m: 1, mb: 3
					}} label='Prijs'
					variant='standard' type='text'
					name='prijs'
					required 
					/>
					<UploadImageCard imageProps={{
						image: '',
						setImage: function (data: string): void {
							throw new Error('Work in progress');
						}
					}} label={''} />
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
        
export default ProgrammaToevoegen;