import {
	CircularProgress,
	Grid,
	ThemeProvider,
	Typography 
} from '@mui/material';
import React from 'react';
import UserContext from '../context/UserContext';

function ErrorPage(){
	const { theme } = React.useContext(UserContext);
	return(
		<ThemeProvider theme={theme.theme}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{
					minHeight:'100%',
					height:'68vh'
				}}
			>
				<Typography>
                    error
				</Typography>
				<Typography sx={{
					py: 3
				}}
				textAlign={'center'}>
                    error icon 
				</Typography>
				<Typography>
                    go back?
				</Typography>
				<Typography>
                    go back button?
				</Typography>
			</Grid>
		</ThemeProvider>
	);
}

export default ErrorPage;