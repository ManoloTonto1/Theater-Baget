import { Box, Button, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup, Input, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
	Container
} from '@mui/system';
import React from 'react';

function Login() {
	return (
		<Container maxWidth={'xs'} sx={{ display: 'flex', alignItems: 'center', height: '85vh' }}>
			<div style={{ backgroundColor: '#000', borderRadius: '5px'}}>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>

					<div className='loginTab selected'>
						sign in
					</div>
					<Link href="#" className='loginTab' sx={{color: '#fff', textDecoration: 'none'}}>
						nog geen account?
					</Link>
				</div>
				<Card sx={{ 
					minWidth: 275, 
					paddingLeft: 6.25, 
					paddingRight: 6.25, 
					borderTopLeftRadius: 0,
					// borderTopRightRadius: 0, 
				}}>
					<CardContent>
						<FormGroup>

							<TextField label='E-mail adres' type='email' variant='standard' color='secondary' sx={{marginBottom: '10px'}}/>
							<TextField label='Wachtwoord' type='password' variant='standard' color='secondary' sx={{marginBottom: '10px'}}/>
							<FormControlLabel control={<Checkbox color='primary' />} label={'Aangemeld blijven'} />
						</FormGroup>
					</CardContent>
					<CardActions>
						<div style={{ width: '100%', textAlign: 'center' }}>
							<Button color='secondary' variant="contained" sx={{ width: ['100%'] }}>sign In</Button>

							<div style={{ margin: '10px' }}>
								<Link href='#' sx={{ color: '#42A5F5'}}>Wachtwoord vergeten?</Link>
							</div>
						</div>
					</CardActions>
				</Card>
			</div>
		</Container>

	);
}

export default Login;