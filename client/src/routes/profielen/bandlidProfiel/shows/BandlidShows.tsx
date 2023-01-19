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

function BandlidShows() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	const [dataLength, setDataLength] = React.useState<number>();
	React.useEffect(() => {
		API('programmeringen').GetAll()
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				setData(res.data);
				setDataLength(res.data.length);

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
					My shows:
				</Typography>
				{dataLength == 0? 
					<Typography variant='h5' mb={2}>
						You currently dont have any reservations.
					</Typography> :
					data.map((card) => {
						console.log(card);
						return <Ticket key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);
}

export default BandlidShows;