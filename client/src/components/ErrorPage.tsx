import {
	Alert,
	Avatar,
	Box,
	Button,
	Card,
	CardMedia,
	CircularProgress,
	Grid,
	ThemeProvider,
	Typography 
} from '@mui/material';
import React from 'react';
import UserContext from '../context/UserContext';
import img from '../assets/poster.png';

function ErrorPage(){
	const { theme } = React.useContext(UserContext);
	return(
		<ThemeProvider theme={theme.theme}>
			<Box style={{
				width: '100%',
				height: '100vh',
				backgroundImage: 'url('+img+')'
			}}>
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{
						minHeight:'60%',
						height:'68vh'
					}}
				>
					<Typography variant= "h2"
						sx={{
							py:10
						}}>
                    Pagina niet gevonden
					</Typography>
					<Alert variant='filled' severity='warning'>Error</Alert>
					<Typography sx={{
						py:3
					}}>
                    De pagina die u probeert te bereiken is niet gevonden
					</Typography>
					<Button variant="contained">Ga terug</Button>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}

export default ErrorPage;