import {
	ThemeProvider 
} from '@emotion/react';
import {
	Grid 
} from '@mui/material';
import React from 'react';
import {
	useNavigate 
} from 'react-router-dom';
import UserContext from '../../context/UserContext';

function ErrorPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	return(
		<ThemeProvider theme={theme.theme}>
			<Grid>
                
			</Grid>
		</ThemeProvider>
	);
}
    
export default ErrorPage;