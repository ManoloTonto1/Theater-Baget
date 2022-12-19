import React, { 
	useCallback 
} from 'react';

import { 
	Box, 
	Button, 
	Checkbox, 
	FormControlLabel, 
	FormGroup, 
	Link, 
	TextField 
} from '@mui/material';

function SignIn () {
    
	// general values
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [rememberMe, setRememberMe] = React.useState(false);

	const handlePassword = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleEmail = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	}, []);

	const signIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (

		<form onSubmit={signIn}>
			<Box sx={{ 
				p: 2 
			}}>
				<FormGroup sx={{
					'& .MuiTextField-root': { 
						m: 1 
					}, textAlign: 'center'
				}}>
					<TextField sx={{ 
						mb: 2 
					}} 
					label='E-mail adres'
					variant='standard' type='email'
					required onChange={handleEmail}
					value={email}
					/>

					<TextField sx={{ 
						mb: 2 
					}} 
					label='Wachtwoord' 
					variant='standard' 
					type='password' 
					onChange={handlePassword} 
					value={password}
					required 
					/>

					<FormControlLabel sx={{ 
						mb: 2 
					}} 
									
					control={
						<Checkbox 
							checked={rememberMe} 
							onChange={() => setRememberMe(!rememberMe)} 
						/>} 
					label='Aangemeld blijven' 
					/>
									
					<Button 
						variant='contained' 
						color='secondary'
						type='submit'>
										sign in
					</Button>

					<Link sx={{ 
						pt: 2 
					}} 
					color='#0d99ff'>
										Wachtwoord vergeten?
					</Link>
				</FormGroup>
			</Box>
		</form>

	);
}

export default SignIn;