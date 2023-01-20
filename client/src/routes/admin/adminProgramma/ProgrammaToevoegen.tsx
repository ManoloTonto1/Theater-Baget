import type {
	SelectChangeEvent
} from '@mui/material';
import {
	Grid
	,
	Box, Button, Card, Chip,
	FormControl, FormGroup,
	InputLabel, MenuItem, Select, TextField, Typography 
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
import UploadImageCard from '../adminProgramma/ImageUpload';
type Zaal = {
	zaalNr: number;
	soort: string;
}

function ProgrammaToevoegen() {
	const [image,setImage] = React.useState('');
	const [voorstellingDatum, setVoorstellingDatum] = React.useState<Dayjs | null>(dayjs());
	const [selectedZaal, setSelectedZaal] = React.useState('');
	const [zalen, setZalen] = React.useState<never[] | Zaal[]>([]);
	
	React.useEffect(() => {
		API('zalen').GetAll().then((res) => {
			if (res.status != 200) {
				return;
			}
			setZalen(res.data);
		});	
	},[]);
	const handleChange = useCallback((event: SelectChangeEvent) => {
	  setSelectedZaal(event.target.value as string);
	},[]);
	const handleForm = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form as HTMLFormElement);
		for (const value of formData.values()) {
			console.log(value);
		}
		const date = voorstellingDatum?.toDate();
		if (!date) {
			return;
		}
		const apiSafeDate = `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}`;
		API('programmeringen').Create({
			datum: apiSafeDate,
			titel: formData.get('titel'),
			afbeelding: image,
			omschrijving: formData.get('omschrijving'),
			prijs: parseFloat(formData.get('prijs') as string),
			zaalNr: parseInt(selectedZaal),
		}).then((res) => {
			if (res.status !== 200) { /* empty */ }
		});
		console.log(voorstellingDatum);
	}, [image, selectedZaal, voorstellingDatum]);

	return (
		<Box
			component = 'form'
			id='form'
			sx={{
				p: 3
			}}>
			<FormGroup>
				<Typography variant="h5">
                Programma toevoegen
				</Typography>
				<UploadImageCard imageProps={{
					image: image,
					setImage: setImage
				}} label={''} />
				<TextField sx={{ 
				 mb: 2 
				}} 
				label='Titel' 
				variant='standard' 
				type='text' 
				name='titel'
				required 
				/>
				<TextField sx={{ 
					mb: 2 
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
							mb: 2 
						}} variant='standard'
						{...params} />}
					/>
				</LocalizationProvider>
				<Grid container spacing = {3}>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<InputLabel id="Zaal select">Zaal select</InputLabel>
							<Select
								variant='standard'
								labelId="Zaal select"
								value={selectedZaal}
								label="Zaal select"
								onChange={handleChange}
							>
								{zalen.map((zaal) => {
									return <MenuItem key={zaal.zaalNr} value={zaal.zaalNr}>
										<Chip size={'small'} color={'primary'}
											label={`#${zaal.zaalNr}`} />
									</MenuItem>;
								})}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<TextField sx={{
							mb: 2 
						}} label='Prijs'
						variant='standard' type='text'
						name='prijs'
						fullWidth
						required 
						/>
					</Grid>
				</Grid>
				<Button variant='contained' type='submit'
					onClick={handleForm} sx={{
						my:3
					}}>
				Toevoegen
				</Button>
			</FormGroup>
		</Box>
	);
}
        
export default ProgrammaToevoegen;