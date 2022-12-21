import {
	Box, Card, Container, FormGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField 
} from '@mui/material';

import React, {
	useCallback,
	useState 
} from 'react';
import { 
	DatePicker, 
	LocalizationProvider 
} from '@mui/x-date-pickers';

import dayjs, { 
	Dayjs 
} from 'dayjs';

import { 
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TicketKopen() {

	const buyTicket = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); 
	}, []);
    
	const [cardNumber, setCardNumber] = useState(0);
	const [cardHolder, setCardHolder] = useState('');
	const [expDate, setExpDate] = useState<Dayjs | null>(dayjs());
	const [stoel, setStoel] = useState(''); 

	const handleCardNumber = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCardNumber(parseInt(e.target.value));
	}, []);

	const handleCardHolder = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCardHolder(e.target.value);
	}, []);

	const handleStoel = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setStoel(e.target.value);
	}, []);

	return (
		<Box style={{
			width: '100%',
			height: '100vh',
		}}
		onSubmit={buyTicket}
		component={'form'}>
			<Container style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>

				<Card elevation={4} sx={{ 
					width: 750,
					p: 4,
				}} >

					<FormGroup sx={{
						'& .MuiTextField-root': {
							m: 1,
						}, textAlign: 'center',
					}}>
						<Box sx={{
							'& .MuiTextField-root': { 
								m: 1, 
								width: '30%'
							},
						}}>
							<TextField sx={{
								mb: 2
							}}
							label='Card holder'
							variant='standard' type='text'
							required
							value={cardHolder}
							onChange={handleCardHolder}
							/>
							<TextField sx={{
								mb: 2
							}}
							label='Card number'
							variant='standard' type='number'
							onChange={handleCardNumber}
							required
							/>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Expiration Date"
									value={expDate}
									onChange={(newValue) => {
										setExpDate(newValue);
									}}
									renderInput={(params) => <TextField sx={{
										m:1
									}} variant='standard'
									{...params} />}
								/>
							</LocalizationProvider>
						</Box>
					</FormGroup>
					<FormGroup sx={{
						'& .MuiTextField-root': {
							m: 1
						}, textAlign: 'center', p:1.5
					}}>
					</FormGroup>
					<FormGroup 
						sx={{
							p:2,    
						}}>

						<Typography variant='h6'>
                            Stoelen selecteren
                            
						</Typography>

						{/* dit deel moet nog */}
							
					</FormGroup>
					<Box sx={{
						display: 'flex',
						m:2
					}}>
						<Button 
							type='submit' 
							variant='contained' 
							sx={{
								mr:2
							}}>
                            Betalen
						</Button>
						<Button variant='text' color='secondary'>
                            Cancel
						</Button>
					</Box>
				</Card>
			</Container>

		</Box>
	);
}

export default TicketKopen;