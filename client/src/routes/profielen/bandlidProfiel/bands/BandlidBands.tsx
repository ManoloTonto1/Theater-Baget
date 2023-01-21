import {
	Box, CardContent, Typography 
} from '@mui/material';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';
import {
	Ticket 
} from '../../../../components/Ticket';
import type {
	Groep, Programma
} from '../../../../components/global/globalTypes';
import API from '../../../../api/apiRoutes';
import {
	BandCard 
} from '../../../../components/BandCard';
import UserContext from '../../../../context/UserContext';
import {
	redirect 
} from 'react-router-dom';

function BandlidBands() {
	const [data, setData] = React.useState<never[] | Groep[]>([]);
	const { user } = React.useContext(UserContext);
	React.useEffect(() => {
		API('betrokkenen')
			.Get(user.userData?.id + '')
			.then((res) => {
				setData(res.data.groepen);
			});
	}, []);

	return (
		<Box sx={{
			p: 1,
			overflowY: 'visible',
			scrollbarWidth: 'thin'
		}}>
			<CardContent sx={{
				
			}}>
				<Typography variant='h4' mb={2}>
					Mijn bands:
				</Typography>
				
				{
					data.map((card) => {
						return <BandCard key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);
}

export default BandlidBands;