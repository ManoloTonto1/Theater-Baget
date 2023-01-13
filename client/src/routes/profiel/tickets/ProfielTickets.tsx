import {
	Box, CardContent, Typography 
} from '@mui/material';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';
import type {
	TicketsProps
} from '../../../components/Ticket';
import {
	Ticket 
} from '../../../components/Ticket';
import Monki from '../../../assets/gorilla.jfif';
import Baget from '../../../assets/baguette.png';
import Post from '../../../assets/poster.png';
import type {
	Programma 
} from '../../../components/global/globalTypes';

function ProfielTickets() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	React.useEffect(() => {
		// API('programmeringen').Get(value)
		// 	.then((res) => {
		// 		if (res.status != 200) {
		// 			return;
		// 		}

		// 	});
		setData([{
			datum: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Monki in paris',
			location: '013 - Tilburg',
			image: Monki
		},
		{
			date: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Baget',
			location: '013 - Tilburg',
			image: Baget
		},
		{
			date: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Baget',
			location: '013 - Tilburg',
			image: Post
		}
		]);
	}, [value]);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent>
				<Typography variant='h4' mb={2}>
					Tickets:
				</Typography>
				{data.map((card) => {
					return <Ticket key={card.name} {...card} />;
				})}
			</CardContent>
		</Box>

	);
}

export default ProfielTickets;