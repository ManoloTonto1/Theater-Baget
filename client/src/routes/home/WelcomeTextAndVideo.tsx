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
						WebkitBackgroundClip: 'text',
						backgroundClip:'text',
						WebkitTextFillColor: 'transparent',
					}}
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
				src="https://www.youtube.com/embed/9zLWwGQf7v8"
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
			<Grid item
				lg={6}
				xs={12}
			>
				<WelcomeText/>
			</Grid>
			<Grid item
				lg={6}
				xs={12}
				height={'inherit'}>
				<Video/>
			</Grid>
		</Grid>
	);
}

export default WelcomeTextAndVideo;