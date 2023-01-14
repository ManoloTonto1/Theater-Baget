import React from 'react';
import {
	Box, Grow, Card, CardContent, Typography, Divider 
} from '@mui/material';
import type {
	EventProps 
} from './Event';

function RightCard(props:EventProps) {
	return (
		<Box sx={{
			m: 2,
		}}>
			<Grow in timeout={300}>
				<Card elevation={3} sx={{
					height: 400,
					p: 2,
				}}>
					<CardContent>
						<Box>

							<Typography variant='h4'>
                              Beschrijving
							</Typography>
							<Divider />
							<Typography sx={{
								mt: 2
							}} variant='body1'>

								{props.data.omschrijving}
							</Typography>
						</Box>
					</CardContent>

				</Card>
			</Grow>
		</Box>
	);
}

export default RightCard;