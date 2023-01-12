import React from 'react';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import {
	Container 
} from '@mui/system';
import Card from '@mui/material/Card';
import {
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';
import {
	LocalizationProvider 
} from '@mui/x-date-pickers/LocalizationProvider';
import {
	StaticDatePicker 
} from '@mui/x-date-pickers/StaticDatePicker';
import {
	getTickets 
} from '../../tools/TicketTools';

function BegunstigersPortaal() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs(''));

	return (
		<Container style={{
			height: '80vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Card elevation={4} sx={{ 
				height: 485,
				p: 1,
				marginRight: 4,
			}}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<StaticDatePicker
						onChange={(newValue) => setValue(newValue)}
						value={value}
						renderInput={(params) => <TextField {...params} />}
						componentsProps={{
							actionBar: {
								actions: ['today'],
							},
						}}
					/>
				</LocalizationProvider>
			</Card>
			<Card elevation={4} sx={{ 
				height: 485,
				p: 1,
				overflowY: 'scroll',
			}}>
				{getTickets('safgsafgfdsgsdfgsdfegds')}
			</Card>
		</Container>
	);
}

export default BegunstigersPortaal;