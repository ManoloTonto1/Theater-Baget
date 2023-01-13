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
import type { 
	TicketData
} from '../../components/Ticket';
import {
	Ticket,
} from '../../components/Ticket';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import API from '../../api/apiRoutes';
import {
	Typography 
} from '@mui/material';
import Monki from '../../assets/gorilla.jfif';
import Baget from '../../assets/baguette.png';
import Post from '../../assets/poster.png';
import {
	useNavigate 
} from 'react-router-dom';

/* source date picker: https://mui.com/x/react-date-pickers/custom-components/ */
function ProgrammaOverzicht() {
	const navigate = useNavigate();
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data,setData] = React.useState<never[] | TicketData[]>([]);
	React.useEffect(() => {
		// API('programmeringen').Get(value)
		// 	.then((res) => {
		// 		if (res.status != 200) {
		// 			return;
		// 		}

		// 	});
		setData([{
			date: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Monki in paris',
			location: '013 - Tilburg',
			image: Monki
		},
		{
			date: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Baget',
			location: '013 - Tilburg',
			image: Baget
		},
		{
			date: 'JAN 08 2023',
			time: 'zo - 19:30',
			name: 'Baget',
			location: '013 - Tilburg',
			image: Post
		}
		]);
	}, [value]);
    
	return (
		<Container sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			py:4
		}}>
			<Grid container spacing={3}>
				<Grid item lg={4}
					sm={12}
					xs={12}
				>
					<Card elevation={4} >
						<CardContent>
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
						</CardContent>

					</Card>
				</Grid>
				<Grid item lg={8}
					sm={12}
					xs={12}

				>
					<Card elevation={4} sx={{
						maxHeight: 485,
						p: 1,
						overflowY: 'auto',
						scrollbarWidth:'thin'
					}}>
						<CardContent>
							<Typography variant='h4' mb={2}>
                                Tickets:
							</Typography>
							{data.map((card) => {
								return <Ticket key={card.name} {...card}
									onClick={(e,data)=>navigate(`/tickets/${data.name}`)} />;
							})}
						</CardContent>
					</Card>
				</Grid>
			</Grid>

		</Container>
	);
}

export default ProgrammaOverzicht;