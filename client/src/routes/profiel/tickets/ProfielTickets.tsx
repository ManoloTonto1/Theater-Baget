import { Box } from '@mui/material';
import React from 'react';
import { getUserTickets } from '../../../tools/TicketTools';

function ProfielTickets() {
	return (
		<Box sx={{
            alignContent: 'center',
			width: 700,
			overflowY: 'scroll',
        }}>
			{getUserTickets()}
			{getUserTickets()}
			{getUserTickets()}
		</Box>
	);
}

export default ProfielTickets;