import {
	Grid, TextField 
} from '@mui/material';
import React from 'react';
import type {
	Charity 
} from './types';

type props = {
    chosenCharity: Charity | null
    nextStep: () => Promise<void>

}
function PayDetails(props:props):JSX.Element {
	return (
		<Grid item>
			<TextField>
                kanker
			</TextField>
		</Grid>
	);
}

export default PayDetails;