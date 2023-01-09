import {
	ThemeProvider 
} from '@emotion/react';
import {
	alpha,
	Box,
	Button,
	Card,
	Container,
	Grid, 
	InputBase, 
	styled, 
	TextField,
	Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import {
	Search,
	useNavigate 
} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import img from '../../assets/poster.png';

function ErrorPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	return(
		<ThemeProvider theme={theme.theme}>
			<Box style={{
				width: '100%',
				height: '100vh',
				backgroundImage: 'url('+img+')'
			}}>
				<Container style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<Grid container spacing={2}>
						<Card sx={{
							width: 250,
							height: 300,
							p: 3
						}}>
							<Typography sx={{
								mb: 2
							}}>Programma uploaden (Excell)</Typography>
							<Button variant="contained" component="label">
                                Upload
								<input hidden accept="image/*"
									multiple type="file" />
							</Button>
						</Card>
						<Card sx={{
							width: 250,
							p: 3
						}}>
							<Typography>Gebruiker toevoegen</Typography>
							<TextField id="standard-basic" label="Naam"
								variant="standard" />
							<TextField id="standard-basic" label="Geboortedatum"
								variant="standard" />
							<TextField id="standard-basic" label="E-Mail"
								variant="standard" />
							<TextField id="standard-basic" label="Wachtwoord"
								variant="standard" />
							<TextField id="standard-basic" label="Wachtwoord bevestigen"
								variant="standard" />
							<Button variant="contained">Gebruiker toevoegen</Button>
						</Card>
						<Card sx={{
							width: 250,
							p:3
						}}>
							<Typography>Gebruiker inzien</Typography>
							<TextField id="standard-basic" label="Naam"
								variant="standard" />
						</Card>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
    
export default ErrorPage;