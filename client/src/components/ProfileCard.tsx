import {
	Card, Grid, Avatar, Box, Typography
} from '@mui/material';
import React from 'react';
import {
	leeftijdsGroep,
	userData 
} from '../context/UserContext';
import Monki from '../assets/gorilla.jfif';
import UserContext from '../context/UserContext';
import ErrorPage from './ErrorPage';

export function ProfileCard(props?: userData) {
	const { user, role } = React.useContext(UserContext);
	console.log(props);
	const userData = props?.id? props : user.userData;
	return (
		<>
			{userData ? (
				<Card elevation={4} sx={{
					marginBottom: 2,
					display: 'flex',
					justifyContent: 'center'
				}}>
					<Grid container>
						<Avatar
							alt={userData.naam}
							src={Monki}
							sx={{
								width: 100,
								height: 100,
								m: 2
							}} />
						<Box sx={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column'
						}}>
							<Typography variant='h4'>
								{userData.naam}
							</Typography>
							<Typography variant='h6'>
								{userData.email}
							</Typography>
							<Typography variant="body2">
								{leeftijdsGroep[parseInt(userData.leeftijdsGroep)]}
							</Typography>
						</Box>
					</Grid>
				</Card>

			) : <ErrorPage />}
		</>
	);
}