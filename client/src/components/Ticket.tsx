import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {
	CardActionArea, Grid 
} from '@mui/material';

export type TicketsProps = {
	date: string,
	time: string,
	name: string,
	location: string,
	image: string
}
export function Ticket(props:TicketsProps) {

	const newDate = props.date.split(' ');
	return (
		<Card sx={{
			width: '100%',
			minWidth: 500,
			heigh: '100%',
			backgroundImage: `url(${props.image})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 30000,
			marginBottom: 2,
		}}>
			<CardActionArea>
				<Grid container>
					<Grid item>
						<CardMedia
							component="img"
							sx={{
								height:120,
								width: 200,
								p: 1,
								marginRight: 1,
								borderRadius: 3,
								// filter: 'blur(5px)'
							}}
							image={props.image}
							alt={props.name}
						/>
					</Grid>
					<Grid item >
						<Box
							sx={{
								height:'100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}>
							<Grid container > 
								<Grid item sx={{
									mr: 2,
								}}>
									<Box sx={{
										alignItems: 'center',
										textAlign: 'center',

									}}>
										<Typography variant="h5" lineHeight={1}>
											{newDate[0]}
										</Typography>
										<Typography variant="h4" lineHeight={1}>
											{newDate[1]}
										</Typography>
										<Typography variant="h5" lineHeight={1}>
											{newDate[2]}
										</Typography>
									</Box>
								</Grid>
								<Grid item>
									<Box sx={{
									}}>
										<Typography variant="body1">
											{props.time}
										</Typography>
										<Typography variant="h6">
											{props.name}
										</Typography>
										<Typography variant="body2">
											{props.location}
										</Typography>

									</Box>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>

			</CardActionArea>

		</Card>);
}
