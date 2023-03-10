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
	Ticket,
} from '../../components/Ticket';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import API from '../../api/apiRoutes';
import {
	Typography 
} from '@mui/material';
import {
	useNavigate 
} from 'react-router-dom';
import type {
	Programma 
} from '../../components/global/globalTypes';

/* source date picker: https://mui.com/x/react-date-pickers/custom-components/ */
function ProgrammaOverzicht() {
	const navigate = useNavigate();
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const [data,setData] = React.useState<never[] | Programma[]>([]);
	React.useEffect(() => {
		const date = value?.toDate();
		if (!date) {
			return;
		}
		const apiSafeDate = `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}`;
		API('programmeringen').Get('datum',{
			datum:apiSafeDate
		})
			.then((res) => {
				if (res.status != 200) {
					return;
				}
				setData(res.data);

			});
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
                                Shows:
							</Typography>
							{data.map((card) => {
								return <Ticket key={card.id} {...card}
									onClick={(e, data) => {
										e.preventDefault();
										navigate(`/bestellen/${data.id}`);
									}} />;
							})}
						</CardContent>
					</Card>
				</Grid>
			</Grid>

		</Container>
	);
}

export default ProgrammaOverzicht;