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
	Groep,
	Programma 
} from '../../../../components/global/globalTypes';
import API from '../../../../api/apiRoutes';
import {
	useParams 
} from 'react-router-dom';
import {
	ProfileCard 
} from '../../../../components/ProfileCard';

function BandLeden() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Groep[]>([]);
	const { id } = useParams();
	React.useEffect(() => {
		API('groepen').Get(id)
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				setData(res.data);

			});
	}, [id]);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent sx={{
				marginTop: 100
			}}>
				<Typography variant='h4' mb={2}>
					Leden:
				</Typography>
				{data.map((card, i) => {
					console.log(card);
					return <ProfileCard key={card.id} {...card.betrokkenen[i]} />;
				})}
			</CardContent>
		</Box>

	);
}

export default BandLeden;