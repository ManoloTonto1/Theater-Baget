import {
	CardActionArea, CardContent, CardMedia, Grid, Grow, ThemeProvider
} from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import React from 'react';
import UserContext from '../../context/UserContext';
import Monki from '../../assets/gorilla.jfif';
import {
	useNavigate 
} from 'react-router-dom';
import {
	ActionButtons 
} from './ActionButtons';
import WelcomeTextAndVideo from './WelcomeTextAndVideo';
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
];

function Homepage() :JSX.Element {
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	return (
		<ThemeProvider theme={theme.theme}>
			<Container maxWidth="xl">
				<WelcomeTextAndVideo />

				<ActionButtons />
				
				<Typography
					sx={{
						mb:4
					}}
					textAlign={'left'}
					variant="h3">
					Huidige activiteiten:
				</Typography>

				<Grid container spacing={3}
					sx={{
						mb:4
					}}>
					{
						cards.map((card,index) => {
							return (
								<Grow in timeout={index * 100}
									key={card.naam}>
									<Grid item
										xs={12}
										sm={3}
									>
										<Card elevation={10}>
											<CardActionArea onClick={() : void =>navigate('event/1')}>

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
								</Grow>
							);
						})
					}
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default Homepage;
