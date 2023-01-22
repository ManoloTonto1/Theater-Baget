import {
	Box, Button, CircularProgress, FormGroup, Grid, Grow, TextField, Typography
} from '@mui/material';
import {
	green, red 
} from '@mui/material/colors';
import React, {
	useCallback
} from 'react';
import API from '../../../api/apiRoutes';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

enum states {
    inProgress,
    done,
    failed,
	still
}

export default function ZaalToevoegen() {
	const [state, setState] = React.useState<states>(states.still);
	const [errorText, setErrorText] = React.useState('');

	const handleChangeState = React.useCallback(async () => {
		setState(states.still);
	},[]);

	const handleForm = useCallback(async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form as HTMLFormElement);

		API('zalen').Create({
			soort: formData.get('soort'),
			eersterangsAantal: parseFloat(formData.get('eersterang')as string),
			tweederangsAantal: parseFloat(formData.get('tweederang')as string),
			derderangsAantal: parseFloat(formData.get('derderang')as string),
		}).then((res) => {
			if (res.status !== 200) { 
				setErrorText('Vul de benodigde velden');
				states.failed;
			}
			setState(states.done);
		}).catch(() => {
			setErrorText('Vul de benodigde velden');
		});
	}, []);

	return (
		<>
			{state === states.still && (
				<Box
					sx={{
						p: 3
					}}
					component='form'
					id='form'
				>
					<Typography color='red' align='center'>{errorText}</Typography>
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
						error={errorText?true:false}
						required
						/>
						<TextField sx={{
							m: 1, mb: 2
						}}
						label='Aantal eersterangs stoelen'
						variant='standard'
						type='number'
						name='eersterang'
						error={errorText?true:false}
						required
						/>
						<TextField sx={{
							m: 1, mb: 2
						}} label='Aantal tweederangs stoelen'
						variant='standard' 
						type='number'
						name='tweederang'
						error={errorText?true:false}
						required
						/>
						<TextField sx={{
							m: 1, mb: 3
						}} label='Aantal derderangs stoelen'
						variant='standard' 
						type='number'
						name='derderang'
						/>
						<Button variant='contained' type='submit'
							onClick={handleForm} sx={{
								my: 3
							}}>
					Toevoegen
						</Button>
					</FormGroup>
				</Box >
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
				</Grid></> )}
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
						Terug naar zaal toevoegen
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