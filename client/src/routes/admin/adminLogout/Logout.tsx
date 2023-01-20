import {
	Box, Button, Typography 
} from '@mui/material';
import React from 'react';

function Logout() {
	return (
		<Box
			component = 'form'
			id='form'
			sx={{
				p: 3
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