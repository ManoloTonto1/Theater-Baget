import React from 'react';
import {
	Box, Grow, Card, CardMedia, CardContent, Typography, Button
} from '@mui/material';
import {
	useNavigate 
} from 'react-router-dom';
import type {
	EventProps 
} from './Event';

function LeftCard(props:EventProps) : JSX.Element {
	scrollTo(0, 0);
	const navigate = useNavigate();
	const goToPayPage = React.useCallback(() => {
		navigate(`/tickets/${props.data.id}`);  
	},[navigate,props]);
	return (
		<Box sx={{
			m: 2,
		}}>
			<Grow in timeout={200}>
				<Card elevation={3} sx={{
					p: 2,
				}}>
					
					<Box sx={{
						m: 2
					}}>
						<CardMedia component='img'
							src={props.data.afbeelding}
							sx={{
								width: '100%',
								borderRadius: 1,
							}} />
					</Box>

					<CardContent>
						<Typography variant={'body2'} sx={{
							color: 'text.secondary'
						}}>
							{props.data.datum}
						</Typography>
						<Typography variant='h3'>
							{props.data.titel}
						</Typography>
					</CardContent>
					<Box sx={{
						mx: 2,
						mb: 2
					}}>
						<Button
							onClick={goToPayPage}
							variant={'contained'}>
                            Tickets Kopen
						</Button>

					</Box>
				</Card>
			</Grow>
		</Box>
	);
}

export default LeftCard;