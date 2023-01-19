import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {
	CardActionArea, Grid 
} from '@mui/material';
import type {
	Programma 
} from './global/globalTypes';
import truncateString from '../api/truncateString';
export type TicketsProps = {
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data:Programma)=>void
} & Programma

export function Ticket(props:TicketsProps) {
	const datum = new Date(props.datum);
	const newDate = datum.toString().split(' ');
	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				backgroundImage: `url(${props.afbeelding})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 30000,
				marginBottom: 2,
				backgroundColor: 'rgba(0,0,0,0.7)',
				backgroundBlendMode: 'multiply'		
			}}
			onClick={
				props.onClick
					? (e) =>
						props.onClick(e, {
							...props,
						})
					: undefined
			}
		>
			<CardActionArea
				LinkComponent={'a'}
				href={`/#/bestellen/${props.id}`}>
				<Grid container>
					<Grid item>
						<CardMedia
							component="img"
							sx={{
								height: 120,
								width: 200,
								p: 1,
								marginRight: 1,
								borderRadius: 3,
							}}
							image={props.afbeelding}
							alt={props.titel}
						/>
					</Grid>
					<Grid item>
						<Box
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<Grid container>
								<Grid
									item
									sx={{
										mr: 2,
									}}
								>
									<Box
										sx={{
											alignItems: 'center',
											textAlign: 'center',
										}}
									>
										<Typography variant="h5" lineHeight={1}>
											{newDate[1]}
										</Typography>
										<Typography variant="h4" lineHeight={1}>
											{newDate[2]}
										</Typography>
										<Typography variant="h5" lineHeight={1}>
											{newDate[3]}
										</Typography>
									</Box>
								</Grid>
								<Grid item>
									<Box sx={{
									}}>
										<Typography variant="body1">
											{datum.toUTCString()}
										</Typography>
										<Typography variant="h6">{props.titel}</Typography>
										<Typography variant="body2" >
											{truncateString(props.omschrijving,45)}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</CardActionArea>
		</Card>
	);
}
