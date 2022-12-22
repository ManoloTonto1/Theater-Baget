import React from 'react';
import {
	Box, Grow, Card, CardMedia, CardContent, Typography, Button
} from '@mui/material';
import Monki from '../../assets/gorilla.jfif';
import {
	useNavigate 
} from 'react-router-dom';
import AnchoredBackButton from '../../components/global/AnchoredBackButton';

function LeftCard() : JSX.Element {
	scrollTo(0, 0);
	const navigate = useNavigate();
	const goToPayPage = React.useCallback(() => {
		navigate('/ticket');  
	},[navigate]);
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
							src={Monki}
							sx={{
								width: '100%',
								borderRadius: 1,
							}} />
					</Box>

					<CardContent>
						<Typography variant={'body2'} sx={{
							color: 'text.secondary'
						}}>
                            April 69, 2022
						</Typography>
						<Typography variant='h3'>
                            Monki in paris
						</Typography>
						<Typography variant={'body1'} sx={{
							color: 'text.secondary'
						}}>
                            Nice and cozy before your mom comes to me
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
					<AnchoredBackButton newLocation='/' />
				</Card>
			</Grow>
		</Box>
	);
}

export default LeftCard;