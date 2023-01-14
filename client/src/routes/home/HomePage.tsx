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
import {
	useNavigate 
} from 'react-router-dom';
import {
	ActionButtons 
} from './ActionButtons';
import WelcomeTextAndVideo from './WelcomeTextAndVideo';
import API from '../../api/apiRoutes';
import type {
	Programma 
} from '../../components/global/globalTypes';
import LoadingPage from '../../components/global/LoadingPage';

function Homepage(): JSX.Element {
	const [data, setData] = React.useState<null | Programma[]>(null);

	React.useEffect(()=> {
		API('programmeringen').GetAll()
			.then((res) => {
				setData(res.data);
			});
	},[]);
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
						data ? data.map((card, index) => {
							const datum = new Date(card.datum);
							const newDate = datum.toString().split(' ');
							return (
								<Grow in timeout={index * 100}
									key={card.zaalNr}>
									<Grid item
										xs={12}
										sm={3}
									>
										<Card elevation={10} 
										>
											<CardActionArea
												component={'a'}
												href={`#/event/${card.id}`}
												onClick={(e): void => {
													e.preventDefault();
													navigate(`event/${card.id}`);
												}}>

												<CardMedia
													component="img"
													height={300}
													image={card.afbeelding}
													alt="gorilla"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5"
														component="div">
														{card.titel}
													</Typography>
													<Typography variant="body2" color="text.secondary">
														{newDate[1]} {newDate[2]}, {newDate[3]}
														
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
						}): <LoadingPage/>
					}
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default Homepage;
