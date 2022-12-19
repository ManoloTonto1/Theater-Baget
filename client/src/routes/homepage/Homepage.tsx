import { Button, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import React from 'react';

function Homepage() {
	return (
		<Container>
			<Grid>
			<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image="/src/components/gorilla.jfif"
        alt="gorilla"
      />
	  <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Programma1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
		<CardActions>
        <Button size="small">Bekijk programma</Button>
      </CardActions>
      </CardContent>
			</Card>
			</Grid>
		</Container>

	);
}

export default Homepage;