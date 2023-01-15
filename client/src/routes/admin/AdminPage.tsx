import {
	ThemeProvider 
} from '@emotion/react';
import {
	Autocomplete,
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
import Searchbar from '../../components/Searchbar';
import { 
	useNavigate 
} from 'react-router-dom';
import {
	identity, map 
} from 'cypress/types/lodash';

function AdminPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	
	const getAllUsers = () => {
		const result: string[] = [];
		API('gebruikers').GetAll().then((res)=>{
			res.data.forEach((e: { naam: any; }) => {
				result.push(e.naam);
			});
		}).catch((error) => {
			console.log(error);
		});

		// const res = await API('gebruikers').GetAll();
		// console.log(res.data);
		// const result: string[] = [];
		// res.data.forEach((e: { naam: string; }) => {
		// 	result.push(e.naam);
		// });
		return result;
	};

	const getIdFromName = async(name: any) => {
		let id = 0;

		const response = await API('gebruikers').GetAll();
		response.data.forEach((e: { naam: any; id: number; }) => {
			if(e.naam == name) {
				id = e.id;
			}
		});
		return id;
	};

	const options = getAllUsers();
	// const options = ['admin', 'gebruiker'];

	const [value, setValue] = React.useState<string | null>();
	const [inputValue, setInputValue] = React.useState('');

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
									<input hidden accept="image/*"
										multiple type="file"
									/>
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
								<Autocomplete
									value={value}
									onChange={async (event: any, newValue: string | null) => {
										setValue(newValue);

										// TODO value fixen
										navigate('/profiel/'+await getIdFromName('admin'));
									}}
									inputValue={inputValue}
									onInputChange={(event, newInputValue) => {
										setInputValue(newInputValue);
									}}
									options={options}
									sx={{ 
										mt:2
									}}
									renderInput={(params) => <TextField {...params} label="Naam"
										variant='standard'/>}
								/>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
	
}
    
export default AdminPage;