import React, {
} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
	ThemeProvider
} from '@mui/material/styles';
import {
	Button,
	Tooltip, Typography
} from '@mui/material';
import {
	useNavigate
} from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Sidebar from './Sidebar';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
	const navigate = useNavigate();
	const [isMenuOpen, setMenuOpen] = React.useState(false);
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

	const openSidebarMenu = React.useCallback(async () => {
		setMenuOpen(true);
	}, []);
	return (
		<ThemeProvider theme={theme.theme}>

			<Sidebar isMenuOpen={isMenuOpen}
				setMenuOpen={setMenuOpen} />
			<Box sx={{
				flexGrow: 1
			}}>
				<AppBar position="static" sx={{
					bgcolor:'secondary.main'
				}}>
					<Toolbar sx={{
						display: 'flex',
						justifyContent:'space-between',
					}}>
						<Box sx={{
							display: 'flex',
							alignItems:'center'
						}}>
							<Tooltip title="Open Menu">
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
									sx={{
										mr: 2
									}}
									onClick={openSidebarMenu}
								>
									<MenuIcon />
								</IconButton>
							</Tooltip>
							<Typography variant='body1'flexGrow={1}>
                                Theater Baget
							</Typography>
						</Box>					
						<Box sx={{
							display: 'flex',
						}}>
							<Button startIcon={<PersonIcon/>} variant='contained'>Login</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
            
		</ThemeProvider>
	);
}
