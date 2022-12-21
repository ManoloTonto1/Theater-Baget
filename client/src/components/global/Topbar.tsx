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
import UserContext from '../../context/UserContext';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';

export default function Topbar() {
	const navigate = useNavigate();
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
							<Button onClick={()=>navigate('/login')}
								color='secondary' startIcon={<PersonIcon />}
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
