import React, {
} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
	ThemeProvider
} from '@mui/material/styles';
import {
	Button, Typography
} from '@mui/material';
import {
	useNavigate
} from 'react-router-dom';
import baguette from '../../assets/baguette.png';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';

export default function Topbar() {
	const navigate = useNavigate();
	const { user, theme } = React.useContext(UserContext);
	React.useEffect(() => {
		const fetchData = async () => {
			await axios({
				method: 'GET',
				url: 'api/auth/getloggedinuser',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}).then((res) => {
				if (res.status === 200) {
					user.setUser(res.data);
				}
				if (res.status === 401) {
					localStorage.removeItem('token');
					navigate('/login');
				}
			}).catch((err) => {
				console.log(err);
				localStorage.removeItem('token');
				navigate('/login');
			});
		};
		fetchData();    

		// do not include user, it will create an infinite loop.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate]);
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
						<Box onClick={() => navigate('/')}
							sx={{
								display: 'flex',
								alignItems:'center'
							}}>
							<img style={{
								borderRadius: '50px',
								width: '35px'
							}} src={baguette}
							alt="Theater Baget logo" />

							<Typography variant='body1' sx={{
								ml: 1,
								cursor:'pointer'
							}}
							flexGrow={1}>
                                    Theater Baget
							</Typography>  							
						</Box>					
						<Box sx={{
							display: 'flex',
						}}>
							<Button color='secondary' startIcon={<PaidIcon/>}
								variant='contained' sx={{
									mr:2
								}}>
                                Donate
							</Button>
							<Button color='secondary' startIcon={<PersonIcon/>}
								variant='contained'>
                                Login
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
            
		</ThemeProvider>
	);
}
