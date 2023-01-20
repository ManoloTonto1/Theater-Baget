/* eslint-disable max-len */
import React from 'react';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import {
	Container 
} from '@mui/system';
import Card from '@mui/material/Card';
import {
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';
import {
	LocalizationProvider 
} from '@mui/x-date-pickers/LocalizationProvider';
import {
	StaticDatePicker 
} from '@mui/x-date-pickers/StaticDatePicker';
import {
	Box, Grid, Typography 
} from '@mui/material';
import type {
	$TSfixMeAny 
} from '../../components/global/globalTypes';
import ErrorPage from '../../components/ErrorPage';
import UserContext from '../../context/UserContext';

function BegunstigersPortaal() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs(''));
	const { user, role } = React.useContext(UserContext);

	return (
		<>
			{
				user.userData && user.userData.naam != null ? (
					<Container style={{
						height: '120vh',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Grid container
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{
								minWidth: '100%'
							}}>
							<Box sx={{
								my: 3
							}}>
								<Typography variant= "h2" style={{
									background: '-webkit-linear-gradient(180deg, rgba(213,0,0,1) 0%, rgba(255,235,59,1) 90%)',
									webkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								} as $TSfixMeAny}>
				Begunstigersportaal
								</Typography>
							</Box>
							<Card elevation={4}
								sx={{
									width: '93%',
									my:3
								}}>
								<Typography variant= "h5">
						Welkom in  het begunstigersportaal! Namens het hele team van theater Laak bedanken wij u voor de steun die u geeft aan ons. Deze omgeving is speciaal voor u. Hier kunt u eerder de programmering inzien en kunt u vervroegd kaartjes kopen!
								</Typography>
							</Card>
						</Grid>
						<Grid container
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{
								minHeight: '60%',
								height: '68vh'
							}}>
							<Card elevation={4} sx={{
								height: 485,
								p: 1,
								marginRight: 4,
							}}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<StaticDatePicker
										onChange={(newValue) => setValue(newValue)}
										value={value}
										renderInput={(params) => <TextField {...params} />}
										componentsProps={{
											actionBar: {
												actions: ['today'],
											},
										}} />
								</LocalizationProvider>
							</Card>
							<Card elevation={4} sx={{
								height: 485,
								p: 1,
								overflowY: 'scroll',
							}}>
					
							</Card>
						</Grid>
					</Container>
				) :
					<ErrorPage />}
		</>
	);
}

export default BegunstigersPortaal;