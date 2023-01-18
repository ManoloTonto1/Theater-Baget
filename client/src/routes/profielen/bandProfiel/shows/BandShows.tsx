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

function BandShows() {
	const { id } = useParams();
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	const [dataLenth, setDataLength] = React.useState<number>();
	React.useEffect(() => {
		API('groepen')
			.Get(id)
			.then((res) => {
				if (res.status != 200) {
					return;
				}
			
				setData(res.data.programmeringen);
				setDataLength(res.data.programmeringen.length);

			});
	}, []);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
			overflowY: 'visible'
		}}>
			<CardContent sx={{
				
			}}>
				<Typography variant='h4' mb={2}>
					Bands shows:
				</Typography>
				{ dataLenth == 0? 
					<Typography variant='h5' mb={2}>
					No current shows available.
					</Typography> :
					data.map((card) => {
						console.log('caRD:', card);
						return <Ticket key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);
}

export default BandShows;