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
	Groep
} from '../../../../components/global/globalTypes';
import API from '../../../../api/apiRoutes';
import {
	BandCard 
} from '../../../../components/BandCard';

function BandlidBands() {
	const [data, setData] = React.useState<never[] | Groep[]>([]);
	React.useEffect(() => {
		API('groepen')
			.GetAll()
			.then((res) => {
				setData(res.data);
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
				
				{// still needs querie to search if a guy is in the band
					data.map((card) => {
						console.log(card);
						return <BandCard key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);
}

export default BandlidBands;