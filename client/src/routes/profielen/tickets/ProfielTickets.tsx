import React from 'react';
import {
	Box, CardContent, Typography 
} from '@mui/material';
import {
	Ticket 
} from '../../../components/Ticket';
import type {
	Reservering 
} from '../../../components/global/globalTypes';
import API from '../../../api/apiRoutes';
import type {
	userData 
} from '../../../context/UserContext';
import UserContext from '../../../context/UserContext';
import {
	useNavigate
} from 'react-router-dom';
function ProfielTickets() {
	const [data, setData] = React.useState<never[] | Reservering[]>([]);
	const { user } = React.useContext(UserContext);
	const navigate = useNavigate();
	const u = user.userData as userData;
	React.useEffect(() => {
		// needs to query tickets instead of programmering
		API('gebruikers').Get(u.id + '')
			.then((res) => {
				console.log(res.data);
				if (res.status != 200) {
					return;
				}
				console.log(res.data);
				setData(res.data.reserveringen);
			});
	}, []);

	return (
		<Box sx={{
			overflow:'auto',
			scrollbarWidth: 'thin',
		}}>
			<Typography variant='h4' mb={2}>
					Tickets
			</Typography>
			{data.length == 0 ? 
				(
					<Typography variant='h5' mb={2}>
						U heeft geen Tikets gekocht.
					</Typography>
				)
				:
				data.map((card) => {
					return <Ticket key={card.id} 
						{...card.programmering}
						onClick={(e): void => {
							e.preventDefault();
							e.stopPropagation();
							navigate(`event/${card.id}`);
						}} />;
				})}
		</Box>

	);
}

export default ProfielTickets;