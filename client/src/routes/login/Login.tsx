import { Box, Button, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup, Input, Link, Paper, Tab, Tabs } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { Form } from 'react-router-dom';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Login() {

	const signIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// logs voor testen
		console.log(email);
		console.log(password);
		console.log(rememberMe);
	}
	
	const signUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let error: boolean = true;
		if(password == confirmPassword) {
			setPasswordsMatch(true);
			error = false;
		} else {
			setPasswordsMatch(false);
			error = true;
		}

		if(!error) {

			
			// logs voor testen
			console.log(voornaam);
			console.log(tussenvoegsel);
			console.log(achternaam);
			console.log(geboorteDatum);
			console.log(password);
			console.log(confirmPassword);
			console.log(rememberMe);
		}
	}

	const [tab, setTab] = React.useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	// general values
	const [password, setPassword] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);
	const [acceptPolicy, setAcceptPolicy] = React.useState(false);
	
	// sign up specifieke credentials
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [geboorteDatum, setGeboorteDatum] = React.useState<Dayjs | null>(dayjs());
	
	const [voornaam, setVoornaam] = React.useState("");
	const [tussenvoegsel, setTussenvoegsel] = React.useState("");
	const [achternaam, setAchternaam] = React.useState("");
	
	// errors
	const [passwordsMatch, setPasswordsMatch] = React.useState(true);
	

	// data handlers
	const handlePassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}
	const handleConfirmPassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setConfirmPassword(e.target.value);
	}

	const handleEmail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}

	const handleVoornaam = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setVoornaam(e.target.value);
	}

	const handleTussenvoegsel = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTussenvoegsel(e.target.value);
	}

	const handleAchternaam = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setAchternaam(e.target.value);
	}

	return (
		<Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

			<Card elevation={4} sx={{ width: 450 }}>
				< Box sx={{ width: '100%' }
				}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={tab} onChange={handleTabChange} variant='fullWidth' sx={{ml:1, mr:1}}>
							<Tab label="sign in" {...a11yProps(0)} />
							<Tab label="sign up" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={tab} index={0}>
						{/* Begin sign in */}
						<form onSubmit={signIn}>
							<Box sx={{ p: 2 }}>
								<FormGroup sx={{
									'& .MuiTextField-root': { m: 1 }, textAlign: 'center'
								}}>
									<TextField sx={{ mb: 2 }} label='E-mail adres' variant='standard' type='email' required onChange={handleEmail} />
									<TextField sx={{ mb: 2 }} label='Wachtwoord' variant='standard' type='password' required onChange={handlePassword} />
									<FormControlLabel sx={{ mb: 2 }} control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />} label='Aangemeld blijven' />
									<Button variant='contained' color='secondary' type='submit'>sign in</Button>
									<Link sx={{ pt: 2 }} color='#0d99ff'>Wachtwoord vergeten?</Link>
								</FormGroup>
							</Box>
						</form>
						{/* Eind sign in */}
					</TabPanel>
					<TabPanel value={tab} index={1}>
						{/* Begin sign up */}
						<form onSubmit={signUp}>

							<Box sx={{ p: 2 }}>
								<FormGroup>
									<Box sx={{
										'& .MuiTextField-root': { m: 1, width: '29%' },
									}}>

										<TextField sx={{ mb: 2 }} label='Voornaam' variant='standard' type='text' required onChange={handleVoornaam}/>
										<TextField sx={{ mb: 2 }} label='Tussenvg' variant='standard' type='text' onChange={handleTussenvoegsel}/>
										<TextField sx={{ mb: 2 }} label='Achternaam' variant='standard' type='text' required onChange={handleAchternaam}/>
									</Box>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											label="Geboorte datum"
											value={geboorteDatum}
											onChange={(newValue) => {
												setGeboorteDatum(newValue);
											}}
											renderInput={(params) => <TextField sx={{m:1}} variant='standard' {...params} />}
										/>
									</LocalizationProvider>
									<TextField sx={{ m: 1, mb: 2 }} label='E-mail adres' variant='standard' type='email' required onChange={handleEmail} />
									<TextField sx={{ m: 1, mb: 2 }} label='Wachtwoord' variant='standard' type='password' required onChange={handlePassword} />
									<TextField sx={{ m: 1, mb: 2 }} label='Wachtwoord bevestigen' variant='standard' type='password' required onChange={handleConfirmPassword} error={!passwordsMatch} helperText={!passwordsMatch ? 'Wachtwoorden komen niet overeen' : ''}/>

									<FormControlLabel sx={{ mb: 2 }} control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />} label='Aangemeld blijven' />
									<FormControlLabel sx={{ mb: 2 }} control={<Checkbox checked={acceptPolicy} onChange={() => setAcceptPolicy(!acceptPolicy)} required 	/>} label='Ik accepteer de privacy policy' />
									<Button variant='contained' color='secondary' type='submit'>sign up</Button>
								</FormGroup>
							</Box>
						</form>
						{/* Eind sign up */}
					</TabPanel>
				</Box >
			</Card>
		</Container>


	);
}

export default Login;