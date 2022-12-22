import {
	Box,
	Button,
	Container,
	Grid,
	ThemeProvider,
	Typography 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import UserContext from '../context/UserContext';
import img from '../assets/poster.png';
import {
	useNavigate 
} from 'react-router-dom';

function ErrorPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	return(
		<ThemeProvider theme={theme.theme}>
			
			<Box style={{
				width: '100%',
				height: '100vh',
				backgroundImage: `url(${img})`
			}}>
				<Container>
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						sx={{
							minHeight: '60%',
							height: '68vh'
						}}
					>
						<Box>
							<Typography variant="h2"

								sx={{
									fontWeight: 'bold',
									pt: 10
								}}>
								Pagina niet gevonden
							</Typography>

							<Typography

								sx={{
									py: 3
								}}>
								Error 404: De pagina die u probeert te bereiken bestaat niet.
							</Typography>
							
							<Button size='large' onClick={(): void => navigate('/')}
								variant="contained"
								startIcon={<ArrowBackIcon />}>Ga terug
							</Button>
								
						</Box>

					</Grid>
				</Container>
			</Box>

		</ThemeProvider>
	);
}

export default ErrorPage;