import {
	ThemeProvider 
} from '@emotion/react';
import {
	Box,
	Button,
	Card,
	Container,
	Grid, 
	TextField,
	Typography
} from '@mui/material';
import React from 'react';
import UserContext from '../../context/UserContext';
import img from '../../assets/poster.png';
import API from '../../api/apiRoutes';

function AdminPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const uploadFile = React.useCallback(() => {
		API('programmering/excel').Create('monki' as any);
	}, []);
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
					<Grid container spacing={2}
						sx={{
							mb:4
						}}>
						<Grid item>
							<Card sx={{
								width: 250,
								height: 80,
								p: 3
							}}>
								<Typography sx={{
									mb: 2
								}}>Programma uploaden (Excell)</Typography>
								<Button variant="contained" component="label">
                                Upload
									<input hidden accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
										multiple type="file" onClick={uploadFile} />
								</Button>
							</Card>
						</Grid>
						<Grid item>
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
								<Button variant="contained" sx={{
									mt:2
								}}>Gebruiker toevoegen</Button>
							</Card>
						</Grid>
						<Grid item>
							<Card sx={{
								width: 250,
								p:3
							}}>
								<Typography>Gebruiker inzien</Typography>
								<TextField id="standard-basic" label="Naam"
									variant="standard" />
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
    
export default AdminPage;