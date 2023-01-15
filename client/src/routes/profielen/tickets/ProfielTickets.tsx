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

function ProfielTickets() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	React.useEffect(() => {
		API('programmeringen').GetAll()
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				setData(res.data);

			});
	}, []);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent sx={{
				marginTop: 100
			}}>
				<Typography variant='h4' mb={2}>
					Tickets:
				</Typography>
				{data.map((card) => {
					console.log(card);
					return <Ticket key={card.id} {...card} />;
				})}
			</CardContent>
		</Box>

	);
}

export default ProfielTickets;