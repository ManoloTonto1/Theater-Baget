import React, {
} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
	ThemeProvider
} from '@mui/material/styles';
import {
	Button, IconButton, Typography
} from '@mui/material';
import {
	useLocation,
	useNavigate
} from 'react-router-dom';
import baguette from '../../assets/baguette.png';
import UserContext from '../../context/UserContext';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip';

function getWindowSize(): {
	innerWidth: number;
	innerHeight: number;
	} {
	const { innerWidth, innerHeight } = window;
	return {
		innerWidth, innerHeight 
	};
}
export default function Topbar(): JSX.Element {
	const [windowSize, setWindowSize] = React.useState(getWindowSize());

	React.useEffect(() => {
		const handleWindowResize = async () : Promise<void>=> {
			setWindowSize(getWindowSize());
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	const navigate = useNavigate();
	const location = useLocation();
	const changeLocation = React.useCallback(async (): Promise<void> => {
		navigate(-1);
	}, [navigate]);

	const { theme } = React.useContext(UserContext);
	return (
		<ThemeProvider theme={theme.theme}>
			<Box sx={{
				flexGrow: 1
			}}>
				<AppBar position="static" sx={{
					bgcolor:'primary.main'
				}}>
					<Toolbar sx={{
						display: 'flex',
						justifyContent:'space-between',
					}}>
						<Box display={'flex'}>
							{location.pathname !== '/' && (
								<Tooltip title='Terug naar voorige pagina'>
									<IconButton
										onClick={(): Promise<void> => changeLocation()}
										sx={{
											mr: 2
										}}>
										<ArrowBackIcon />
									</IconButton>
								</Tooltip>
							)}
							<Box component={'a'} onClick={() :void => navigate('/')}
								sx={{
									display: 'flex',
									alignItems: 'center'
								}}>
								<img style={{
									borderRadius: '50px',
									width: '35px'
								}} src={baguette}
								alt="Theater Baget logo" />

								<Typography variant='body1' sx={{
									ml: 1,
									cursor: 'pointer'
								}}
								flexGrow={1}>
									Theater Baget
								</Typography>
							</Box>	
						</Box>
				
						<Box sx={{
							display: 'flex',
						}}>
							{windowSize.innerWidth > 600 ? (
								<>
									<Button onClick={() :void => navigate('/donate')}
										color='secondary' startIcon={<PaidIcon />}
										variant='contained' sx={{
											mr: 2
										}}>
								Donate
									</Button>
									<Button onClick={() :void=>navigate('/login')}
										color='secondary' startIcon={<PersonIcon />}
										variant='contained'>
                                Login
									</Button>
								</>
							)
								:
								(
									<>
										<Tooltip title='Maak een donatie'>
											<IconButton onClick={(): void => navigate('/donate')}
												sx={{
													mr: 2,
													color: 'black',
													bgcolor: 'secondary.main',
													'&:hover': {
														backgroundColor: 'secondary.dark'
													}
												}}>
												<PaidIcon fontSize='small' />
											</IconButton>
										</Tooltip>

										<Tooltip title='login'>
											<IconButton onClick={(): void => navigate('/login')}
												sx={{
													color: 'black',
													bgcolor: 'secondary.main',
													'&:hover': {
														backgroundColor: 'secondary.dark'
													}
												}}>
												<PersonIcon fontSize='small' />
											</IconButton>
										</Tooltip>
									</>
								)}

						</Box>
					</Toolbar>
				</AppBar>
			</Box>
            
		</ThemeProvider>
	);
}
