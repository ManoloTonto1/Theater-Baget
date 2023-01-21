import type {
	SelectChangeEvent
} from '@mui/material';
import {
	Grow
	,
	CircularProgress
	,
	Grid
	,
	Box, Button, Chip,
	FormControl, FormGroup,
	InputLabel, MenuItem, Select, TextField, Typography 
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
	green, red 
} from '@mui/material/colors';

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

enum states {
    inProgress,
    done,
    failed,
	still
}

function ProgrammaToevoegen() {
	const [image,setImage] = React.useState('');
	const [voorstellingDatum, setVoorstellingDatum] = React.useState<Dayjs | null>(dayjs());
	const [selectedZaal, setSelectedZaal] = React.useState('');
	const [zalen, setZalen] = React.useState<never[] | Zaal[]>([]);
	const [state, setState] = React.useState<states>(states.still);
	const [errorText, setErrorText] = React.useState('');
	
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

	const handleChangeState = React.useCallback(async () => {
		setImage('');
		setSelectedZaal('');
		setVoorstellingDatum(dayjs());
		setState(states.still);
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
			setState(states.inProgress);
			if (res.status !== 200) {
				setErrorText('Vul de benodigde velden'); 
				states.failed;
			}
			setState(states.done);
		}).catch(() => {
			setErrorText('Vul de benodigde velden');
		});
	}, [image, selectedZaal, voorstellingDatum]);
	
	return (
		<>
			{state === states.still && (
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
						<Typography color='red' align='center'>{errorText}</Typography>
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
						error={errorText?true:false}
						required 
						/>
						<TextField sx={{ 
							mb: 2 
						}} 
						label='Omschrijving' 
						variant='standard' 
						type='text' 
						name='omschrijving'
						error={errorText?true:false}
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
										error={errorText?true:false}
										required
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
								variant='standard' 
								type='number'
								name='prijs'
								fullWidth
								error={errorText?true:false}
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
			)}
			{state === states.inProgress && (
				<><Grid sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 5
				}}>
					<CircularProgress size={200} sx={{
						mt: 2,
						color: green[500]
					}} />
				</Grid>
				<Grid sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 5
				}}>
					<Typography variant='h5'>Even geduld A.U.B.</Typography>
				</Grid>
				<Grid item xs={12}
					display='flex'
					justifyContent={'center'}>
				</Grid>	</> )}
			{state === states.done && (
				<>
					<Grow in>
						<Grid item xs={12}
							display='flex'
							justifyContent={'center'}>
							<CheckCircleOutlineIcon sx={{
								fontSize: 200,
								mt: 2,
								color: green[500]
							}}
							/>
						</Grid>
					</Grow>
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<Typography variant='h3' align='center'>
							Toevoegen Gelukt
						</Typography>
					</Grid>	
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<Button variant='contained' onClick={handleChangeState}
							sx={{
								mt: 5
							}}>
                            Terug naar programma toevoegen
						</Button>
					</Grid>	
				</>
			)}
			{state === states.failed && (
				<>
					<Grow in>
						<Grid item xs={12}
							display='flex'
							justifyContent={'center'}>
							<HighlightOffIcon sx={{
								fontSize: 200,
								mt: 2,
								color: red[500]
							}}
							/>
						</Grid>
					</Grow>
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<Button variant='contained' onClick={handleChangeState}
							sx={{
								mt: 5
							}}>
                            Terug naar programma toevoegen
						</Button>
						<Typography variant='h3' align='center'>
                            Toevoegen niet gelukt.
						</Typography>
					</Grid>
				</>
			)}	
		</>
	);
}
        
export default ProgrammaToevoegen;