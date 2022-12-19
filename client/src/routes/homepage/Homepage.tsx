import {
	Button, CardActions, CardContent, CardMedia, Grid, ThemeProvider 
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import React from 'react';
import UserContext from '../../context/UserContext';

function Homepage() {
	const { user, theme } = React.useContext(UserContext);
	return (
		<ThemeProvider theme={theme.theme}>
			<Container>
				<Card sx={{
					maxWidth: 2000
				}}>
					<Typography textAlign={'center'} variant="h3">Welkom bij theater Baget!</Typography>
				</Card>
				<Grid item xs={11}>
					<iframe width="560" height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</Grid>
				<Card sx={{
					maxWidth: 3000
				}}>
					<Typography textAlign={'center'} variant="h4">Huidige activiteiten</Typography>
				</Card>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Card sx={{
							maxWidth: 260 
						}}>
							<CardMedia
								component="img"
								height="120"
								image="/src/components/gorilla.jfif"
								alt="gorilla"
							/>
	  <CardContent>
								<Typography gutterBottom variant="h5"
									component="div">
          Programma1
								</Typography>
								<Typography variant="body2" color="text.secondary">
          Omschrijving programma1
								</Typography>
								<CardActions>
									<Button size="small">Bekijk programma</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{
							maxWidth: 260 
						}}>
							<CardMedia
								component="img"
								height="120"
								image="/src/components/gorilla.jfif"
								alt="gorilla"
							/>
	  <CardContent>
								<Typography gutterBottom variant="h5"
									component="div">
          Programma2
								</Typography>
								<Typography variant="body2" color="text.secondary">
          Omschrijving programma2
								</Typography>
								<CardActions>
									<Button size="small">Bekijk programma</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{
							maxWidth: 260 
						}}>
							<CardMedia
								component="img"
								height="120"
								image="/src/components/gorilla.jfif"
								alt="gorilla"
							/>
	  <CardContent>
								<Typography gutterBottom variant="h5"
									component="div">
          Programma3
								</Typography>
								<Typography variant="body2" color="text.secondary">
          Omschrijving programma3
								</Typography>
								<CardActions>
									<Button size="small">Bekijk programma</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{
							maxWidth: 260 
						}}>
							<CardMedia
								component="img"
								height="120"
								image="/src/components/gorilla.jfif"
								alt="gorilla"
							/>
	  <CardContent>
								<Typography gutterBottom variant="h5"
									component="div">
          Programma4
								</Typography>
								<Typography variant="body2" color="text.secondary">
          Omschrijving programma4
								</Typography>
								<CardActions>
									<Button size="small">Bekijk programma</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default Homepage;