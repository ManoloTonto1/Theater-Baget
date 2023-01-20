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
import UserContext from '../../../../context/UserContext';

function BandlidShows() {
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	const [dataLength, setDataLength] = React.useState<number>();
	const { user } = React.useContext(UserContext);
	React.useEffect(() => {
		API('betrokkenen')
			.Get(user.userData?.id + '')
			.then((res) => {
				console.log(res.data);
				setData(getBandsPrograms(res.data.groepen));
				setDataLength(getBandsPrograms(res.data.groepen).length);
			});
	}, []);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent>
				<Typography variant='h4' mb={2}>
					My shows:
				</Typography>
				{dataLength == 0? 
					<Typography variant='h5' mb={2}>
						You currently dont have any jobs to work.
					</Typography> :
					data.map((card) => {
						console.log(card);
						return <Ticket key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);

	function getBandsPrograms(groepen: Groep[]) {
		const programmas: Programma[] = [];

		if (groepen != null)
			groepen.forEach((groep: Groep) => {
				if (groep.programmeringen != null)
					groep.programmeringen.forEach((programmering: Programma) => {
						programmas.push(programmering);
					});
			});

		return programmas;
	}
}

export default BandlidShows;