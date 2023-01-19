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
} from '../../../components/Ticket';
import type {
	Programma, Reservering 
} from '../../../components/global/globalTypes';
import API from '../../../api/apiRoutes';
import type {
	userData 
} from '../../../context/UserContext';
import UserContext from '../../../context/UserContext';

function ProfielTickets() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Reservering[]>([]);
	const [dataLength, setDataLength] = React.useState<number>();
	const {user} = React.useContext(UserContext);
	const u = user.userData as userData;
	React.useEffect(() => {
		// needs to query tickets instead of programmering
		API('gebruikers').Get(u.id + '')
			.then((res) => {
				console.log(res.data);
				if (res.status != 200) {
					return;
				}
				
				setData(res.data.reserveringen);
				setDataLength(res.data.reserveringen.length);
			});
	}, []);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent>
				<Typography variant='h4' mb={2}>
					Tickets:
				</Typography>
				{dataLength == 0? 
					<Typography variant='h5' mb={2}>
						You currently dont have any reservations.
					</Typography> :
					data.map((card) => {
						console.log(card);
						return <Ticket key={card.id} {...card.programmering} />;
					})}
			</CardContent>
		</Box>

	);
}

export default ProfielTickets;