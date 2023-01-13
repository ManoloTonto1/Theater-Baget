import React from 'react';
import {
	Container, Grid 
} from '@mui/material';
import RightCard from './RightCard';
import LeftCard from './LeftCard';
import {
	useParams 
} from 'react-router-dom';
import API from '../../api/apiRoutes';
import type {
	Programma 
} from '../../components/global/globalTypes';
import LoadingPage from '../../components/global/LoadingPage';
/**
 * show the event after clicking the event card in the home menu
 *
 * @returns {JSX.Element}
 */
export type EventProps = {
  data: Programma;
};
function Event(): JSX.Element {
	const { id } = useParams();
	const [data, setData] = React.useState<null | Programma>(null);
	React.useEffect(() => {
		API('programmeringen')
			.Get(id)
			.then((res) => {
				setData(res.data);
			});
	}, [id]);
	return (
		<Container
			sx={{
				position: 'relative',
				mt: 3,
			}}
		>
			{data ? <Grid container spacing={2}>
				<Grid item xs={12}
					sm={6}>
					<LeftCard data={data} />
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<RightCard data={data} />
				</Grid>
			</Grid>
				: <LoadingPage />}
		</Container>
	);
}

export default Event;
