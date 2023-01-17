import {
	Box, Button, Typography 
} from '@mui/material';
import React from 'react';

function Logout() {
	return (
		<Box sx={{
			display: 'flex',
			justifyItems: 'center',
			alignItems: 'center',
			alignContent: 'center',
			flexDirection: 'column',
			flexWrap: 'nowrap'
		}}>
			<Typography variant="h3" align="center"
				sx={{
					marginBottom: 1,
				}}>
                Weet u zeker dat u wilt uitloggen?
			</Typography>
			<Typography variant="body1" align="center">
                Klik op de knop hieronder om uit te loggen.
			</Typography>
			<Button variant="contained" size="large"
				sx={{
					mt:4,
					width: '100%'
				}}>Log uit</Button>
		</Box>
	);
}

export default Logout;