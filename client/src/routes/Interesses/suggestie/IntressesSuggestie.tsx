//
// voor donateurs in de donatie omgeving.
//  hier kunnen ze op verschillende programmas die nog niet voor het publiek zichtbaar zijn 
// feedback geven wat ze er van vonden
//

import {
	Box, Container, Card, TextField, FormGroup, Button 
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React, {
	useCallback,
	useState 
} from 'react';

function IntressesSuggestie() {

	const [feedback, setFeedback] = useState('');

	const handleFeedback = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFeedback(e.target.value);
	}, []);

	const feedbackVersturen = useCallback(async ()=>{
		// data verwerken        
	},[]);

	return (
		<Box style={{
			width: '100%',
			height: '100vh',
		}}
        
		component={'form'}
		onSubmit={feedbackVersturen}>

			<Container style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>

				<Card elevation={4} sx={{ 
					width: 750,
					p: 4,
				}}>
					<Typography variant={'h6'}>
                        Programma Suggestie
					</Typography>
					<FormGroup>
						<TextField sx={{ 
							mb: 2 
						}} 
						label='Waar zou het programma over gaan?' 
						variant='standard' 
						type='text' 
						required 
						value={feedback}
						onChange={handleFeedback}
						multiline
						/>
					</FormGroup>
					<FormGroup>
						<Box>
							<Button variant='contained' color='primary'
								type='submit'>Versturen</Button>
							<Button variant='text' color='secondary'>annuleren</Button>
						</Box>
					</FormGroup>
				</Card>
			</Container>
		</Box>
	);
}

export default IntressesSuggestie;