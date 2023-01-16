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
	Programma 
} from '../../../components/global/globalTypes';
import API from '../../../api/apiRoutes';
import UserContext from '../../../context/UserContext';

function ProfielTickets() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	const {user} = React.useContext(UserContext);
	const u = user.userData as userData;
	React.useEffect(() => {
		API('programmeringen').GetAll()
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				// needs to be fixed
				setData(res.data.find(re => re.owner.id = u.id));
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
				{data.map((card) => {
					console.log(card);
					if(!card)
					{
						return <Typography key='pimol' variant='h4' mb={2}>
							No cards.
						</Typography>;
					}
					return <Ticket key={card.id} {...card} />;
				})}
			</CardContent>
		</Box>

	);
}

export default ProfielTickets;