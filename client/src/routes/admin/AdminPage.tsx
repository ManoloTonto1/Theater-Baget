import {
	ThemeProvider 
} from '@emotion/react';
import {
	alpha,
	Box,
	Button,
	Card,
	Container,
	Grid, 
	InputBase, 
	styled, 
	TextField,
	Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import {
	Search,
	useNavigate 
} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import img from '../../assets/poster.png';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

function ErrorPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();
	return(
		<ThemeProvider theme={theme.theme}>
			<Box style={{
				width: '100%',
				height: '100vh',
				backgroundImage: 'url('+img+')'
			}}>
				<Container style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<Grid container spacing={2}>
						<Card sx={{
							width: 250,
							height: 300,
							p: 3
						}}>
							<Typography sx={{
								mb: 2
							}}>Programma uploaden (Excell)</Typography>
							<Button variant="contained" component="label">
                                Upload
								<input hidden accept="image/*"
									multiple type="file" />
							</Button>
						</Card>
						<Card sx={{
							width: 250,
							p: 3
						}}>
							<Typography>Gebruiker toevoegen</Typography>
							<TextField id="standard-basic" label="Naam"
								variant="standard" />
							<TextField id="standard-basic" label="Geboortedatum"
								variant="standard" />
							<TextField id="standard-basic" label="E-Mail"
								variant="standard" />
							<TextField id="standard-basic" label="Wachtwoord"
								variant="standard" />
							<TextField id="standard-basic" label="Wachtwoord bevestigen"
								variant="standard" />
							<Button variant="contained">Gebruiker toevoegen</Button>
						</Card>
						<Card sx={{
							width: 250,
							p:3
						}}>
							<Typography>Gebruiker inzien</Typography>
							<TextField id="standard-basic" label="Naam"
								variant="standard" />
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{
										'aria-label': 'search' 
									}}
								/>
							</Search>
						</Card>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
    
export default ErrorPage;