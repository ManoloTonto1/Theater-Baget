import React from 'react';
import type {
	SelectChangeEvent
} from '@mui/material';
import {
	Box, FormControl, Grid, MenuItem, Select
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import type {
	Programma
} from '../../components/global/globalTypes';
import yellow from '@mui/material/colors/yellow';
import orange from '@mui/material/colors/orange';
import {
	green
} from '@mui/material/colors';
import API, {
	apiEndPoint 
} from '../../api/apiRoutes';
import {
	useParams
} from 'react-router-dom';
type props = {
	selection: never[] | string[];
	setSelection: React.Dispatch<React.SetStateAction<string[] | never[]>>;
} & Programma;

import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
	.withUrl('/ws/stoelen')
	.build();

function SeatChoice(props: props) {
	const { id } = useParams();
	const [seats, setSeats] = React.useState<JSX.Element[]>([]);
	const getSeats = React.useCallback(() => {
		const arr = [];
		let currentLetter = 'A';
		for (let j = 1; j < props.zaal.eersterangsAantal + 1; j++) {
			arr.push(<MenuItem key={currentLetter + j} value={currentLetter + j}>{currentLetter + j}
				<Chip sx={{
					ml: 1,
					bgcolor: yellow[500],
					color: '#000'
				}} label={'1e Rang'} /></MenuItem>);
		}
		currentLetter = 'B';
		for (let j = 1; j < props.zaal.tweederangsAantal + 1; j++) {
			arr.push(<MenuItem key={currentLetter + j} value={currentLetter + j}>{currentLetter + j}
				<Chip sx={{
					ml: 1,
					bgcolor: orange[500],
					color: '#000'
				}} label={'2de Rang'} /></MenuItem>);
		}
		currentLetter = 'C';
		for (let j = 1; j < props.zaal.derderangsAantal + 1; j++) {
			arr.push(<MenuItem key={currentLetter + j} value={currentLetter + j}>{currentLetter + j}
				<Chip sx={{
					ml: 1,
					bgcolor: green[500],
					color: '#000'
				}} label={'3de Rang'} /></MenuItem>);
		}
		return arr;
	},[props.zaal.derderangsAantal, props.zaal.eersterangsAantal, props.zaal.tweederangsAantal]);

	const doFirstFetch = React.useCallback(() => {
		connection.invoke('GetDefault',parseInt(id as string));
		connection.on('receiveMessage', (stoelen) => {
			const seatArray = getSeats();
			seatArray.filter((seat) => !stoelen.includes(seat));
			setSeats(seatArray);
		});
	}, [getSeats, id]);

	const waitForSocketConnetion = React.useCallback(() => {
		setTimeout(() => {
			if (connection.state === signalR.HubConnectionState.Connected && seats.length === 0) {
				doFirstFetch();
			}
			else {
				waitForSocketConnetion();
			}
		},5);
	}, [doFirstFetch]);
	
	React.useEffect(() => {
		connection.start().catch(err => console.error(err.toString()));
		waitForSocketConnetion();
	}, []);
	
	const handleChange = (event: SelectChangeEvent<string[]>) => {
		const { target: { value }, } = event;
		const prev = props.selection;
		props.setSelection(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
		connection.invoke('Update',id,value, prev);

	};
	connection.on('UpdateSeats', (stoelen : string[]) => {
		const seatArray = getSeats();
		const filteredSeats = stoelen.filter((seat) => !props.selection.includes(seat));
		const newSeats = seatArray.filter((seat) => !filteredSeats.includes(seat.key as string));
		setSeats(newSeats);
	});
	
	return (
		<Box
			sx={{
				mt: 4,
			}}
		>
			<Typography
				sx={{
					mb: 2,
				}}
				variant="h4"
			>
				Stoel Selectie:
			</Typography>
			<Grid container spacing={3}>
				<Grid item lg={10}>
					<Typography variant='h5'>
						Instructies:
					</Typography>
					<Typography>
						Onze zalen zijn geconfigureert met rijen van Letters en Nummers, De letters gaan vanaf A t/m C.
						Waardoor <i><b>A</b></i> het dichtst is van het stage,
						en <i><b>C</b></i> het achterste plek is van het zaal is. <br />
						De nummers gaan vanaf <i><b>1</b></i>
						t/m het maximaal aantal zitplaatsen beschikbaar in het zaal.
						Waarbij <i><b>1</b></i> het linkerste plaats is in het zaal.
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<FormControl fullWidth>
						<Select
							multiple
							displayEmpty
							labelId="Stoel selectie"
							value={props.selection}
							onChange={handleChange}
							renderValue={(selected) => {
								if (selected.length === 0) {
									return <em>Stoelen</em>;
								}

								return selected.join(', ');
							}}
						>
							{seats}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SeatChoice;