<<<<<<< HEAD
import {
	Box,
	CardActionArea, CardContent, CardMedia, Divider, Grid, ThemeProvider
} from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import React from 'react';
import UserContext from '../../context/UserContext';
import Monki from '../../assets/gorilla.jfif';

type TCard = {
		naam: string,
		datum: string,
		omschrijving: string,
		afbeelding:string
		
}[]

const cards: TCard = [
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
	{
		naam: 'niggas in paris',
		afbeelding: Monki,
		datum: '69th of your mom',
		omschrijving:'SUPER GAAF'
	},
];

function Homepage() {
	const { theme } = React.useContext(UserContext);
	return (
		<ThemeProvider theme={theme.theme}>
			<Container>
				<Typography sx={{
					py: 2
				}} component={'h1'}
				textAlign={'center'}
				variant="h3">Welkom bij theater Baget!</Typography>
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
				}}>
					<Card
						elevation={3}
						sx={{
							width: 500,
							mb: 2,
							p: 4
						}}>
						<CardMedia>
							<iframe width="500" height="315"
								src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write;
							 encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen>

							</iframe>
						</CardMedia>
					</Card>
				</Box>
				<Divider sx={{
					my:2
				}}/>
				<Typography textAlign={'center'} variant="h4">Huidige activiteiten</Typography>
				<Grid container spacing={3}
					sx={{
						p: 4
					}}>
					{
						cards.map((card) => {
							return (
								<Grid item xs={4}
									key={card.naam}>
									<Card elevation={4}>
										<CardActionArea>

											<CardMedia
												component="img"
												height=""
												image={card.afbeelding}
												alt="gorilla"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5"
													component="div">
													{card.naam}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{card.datum}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{card.omschrijving}
												</Typography>
											</CardContent>
										</CardActionArea>

									</Card>
								</Grid>
							);
						})
					}
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default Homepage;
=======
import React from 'react';

function HomePage() {
	return (
		<div>HomePage</div>
	);
}

export default HomePage;
>>>>>>> 52fdf8c (Added the footer and the header to the root of the app.)
