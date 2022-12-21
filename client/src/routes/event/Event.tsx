import React from 'react';
import {
	Container, 
	Grid
} from '@mui/material';
import RightCard from './RightCard';
import LeftCard from './LeftCard';
/**
 * show the event after clicking the event card in the home menu
 *
 * @returns {JSX.Element}
 */
function Event(): JSX.Element{
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<LeftCard/>
				</Grid>
				<Grid item xs={6}>
					<RightCard/>
				</Grid>
			</Grid>
		
		</Container>
	);
}

export default Event;