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
	Programma 
} from '../../../../components/global/globalTypes';
import API from '../../../../api/apiRoutes';
import Monki from '../../../../assets/gorilla.jfif';
import {
	BandCard 
} from '../../../../components/BandCard';

function BandlidBands() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	React.useEffect(() => {
		//API('groepen').GetAll()
		//.then((res) => {
		//	if (res.status != 200) {
		//		return;
		//	}
		//	setData(res.data);

		//});

		setData([{
			id: 1,
			name: 'akashamonka',
			image: Monki,
			omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			link: 'dood'
		},{
			id: 1,
			name: 'akashamonka',
			image: Monki,
			omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu',
			link: 'dood'
		}]);
	}, []);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin'
		}}>
			<CardContent sx={{
				
			}}>
				<Typography variant='h4' mb={2}>
					Mijn bands:
				</Typography>
				{data.map((card) => {
					console.log(card);
					return <BandCard key={card.id} {...card} />;
				})}
			</CardContent>
		</Box>

	);
}

export default BandlidBands;