import {
	ThemeProvider 
} from '@emotion/react';
import {
	Box,
	Button,
	Card,
	Chip,
	Container,
	Fade,
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
	const [file, setFile] = React.useState<null | ArrayBuffer>(null);
	const [fileURL, setFileURL] = React.useState('');

	const uploadFile = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		if (!target.files) {
			return;
		}
		const file = target.files[0];
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = () => {
			setFileURL(file.name);
			setFile(reader.result as ArrayBuffer);
		};
	}, []);
	const submitFile = React.useCallback(() => {
		API('programmeringen/excel').Create(file,'excel');
	}, [file]);

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
								width: 300,
								p: 3
							}}>
								<Typography sx={{
									mb: 2
								}}>Programma uploaden (Excel)</Typography>
								<Button variant="contained" component="label">
                                Upload
									<input hidden
										accept=".csv"
										multiple type="file"
										onChange={uploadFile} />
								</Button>
								{fileURL ?
									<Fade in>
										<Box>
											<Box display={'flex'}>
												<Typography>File Chosen:</Typography>
												<Chip sx={{
													ml:2
												}} size='small'
												color='info'
												label={fileURL} />
											</Box>
											<Button variant='contained' onClick={submitFile}>
												Submit
											</Button>

										</Box>

									</Fade>
									: null}

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