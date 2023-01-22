import {
	Box, CardContent, Typography 
} from '@mui/material';
import React from 'react';
import API from '../../../../api/apiRoutes';
import {
	useParams 
} from 'react-router-dom';
import {
	ProfileCard 
} from '../../../../components/ProfileCard';
import type {
	userData 
} from '../../../../context/UserContext';

function BandLeden() {
	const [data, setData] = React.useState<never[] | userData[]>([]);
	const [dataLenth, setDataLength] = React.useState<number>();
	const { id } = useParams();
	React.useEffect(() => {
		API('groepen').Get(id)
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				setData(res.data.betrokkenen);
				console.log(res.data.betrokkenen);
				setDataLength(res.data.betrokkenen.length);
			});
	}, [id]);

	return (
		<Box sx={{
			p: 1,
			scrollbarWidth: 'thin',
		}}>
			<CardContent sx={{
				
			}}>
				<Typography variant='h4' mb={2}>
					Leden:
				</Typography>
				{dataLenth == 0? 
					<Typography variant='h5' mb={2}>
					Band currently has no members.
					</Typography> :
					data.map((card) => {
						console.log(card);
						return <ProfileCard key={card.id} {...card} />;
					})}
			</CardContent>
		</Box>

	);
}

export default BandLeden;