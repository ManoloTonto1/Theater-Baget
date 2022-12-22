import {
	Grid, Slide, Typography, Grow, Card 
} from '@mui/material';
import React from 'react';
import type {
	$TSfixMeAny 
} from '../../components/global/globalTypes';
const WelcomeText = () : JSX.Element => {
	return (
		<>
			<Slide in direction='left'>
				<Typography
					sx={{
						fontWeight: 'bold'
					}}
					component={'h1'}
					variant="h1">
                      Welkom bij
				</Typography>
			</Slide>
			<Grow in timeout={500}>
				<Typography
					style={{
						// eslint-disable-next-line max-len
						background: '-webkit-linear-gradient(180deg, rgba(213,0,0,1) 0%, rgba(255,235,59,1) 90%)',
						webkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					} as $TSfixMeAny}
					sx={{
						fontWeight: 'bold',
					}}
					component={'h1'}
					variant="h1">
                      Het Beste Theater
				</Typography>
			</Grow>
			<Slide in direction='right'
				timeout={200}>
				<Typography
					sx={{
						fontWeight: 'bold'
					}}
					component={'h1'}
					variant="h1">
                      In Den Haag
				</Typography>
			</Slide>
		</>
	);
};

const Video = () :JSX.Element => {
	return (
		<Card elevation={20}
			sx={{
				mt: 2,
				display: 'flex',
				justifyContent: 'center',
				height: '100%',
				borderRadius: 4,
			}}>
			<iframe width="100%" height="100%"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				frameBorder="0"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write;
							 encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen>

			</iframe>

		</Card>
	);
};
function WelcomeTextAndVideo() :JSX.Element {
	return (
		<Grid container spacing='3'
			sx={{
				mt: 4,
				mb: 8,
			}}
		>
			<Grid item xs={12}
				sm={6}>
				<WelcomeText/>
			</Grid>
			<Grid item xs={6}
				height={'inherit'}>
				<Video/>
			</Grid>
		</Grid>
	);
}

export default WelcomeTextAndVideo;