import {
	Box,
	Card,
	CardMedia,
	CircularProgress,
	Divider,
	Grid,
	ThemeProvider,
	Typography 
} from '@mui/material';
import {
	Container 
} from '@mui/system';
import React from 'react';
import UserContext from '../../context/UserContext';

function LoadingPage(){
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
				<CircularProgress />
				<Typography sx={{
					py: 3
				}}
				textAlign={'center'}>
                    Even geduld A.U.B..... 
				</Typography>
			</Grid>
		</ThemeProvider>
	);
}

export default LoadingPage;