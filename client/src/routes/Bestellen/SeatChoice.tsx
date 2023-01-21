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
import {
	useParams 
} from 'react-router-dom';
import * as signalR from '@microsoft/signalr';

type props = {
  connection: signalR.HubConnection;
  selection: never[] | string[];
  setSelection: React.Dispatch<React.SetStateAction<string[] | never[]>>;
} & Programma;

async function loadSeats(
	eersterangsAantal: number,
	tweederangsAantal: number,
	derderangsAantal: number
) {
	const arr = [];
	let currentLetter = 'A';
	for (let j = 1; j < eersterangsAantal + 1; j++) {
		arr.push(
			<MenuItem key={currentLetter + j} value={currentLetter + j}>
				{currentLetter + j}
				<Chip
					sx={{
						ml: 1,
						bgcolor: yellow[500],
						color: '#000',
					}}
					label={'1e Rang'}
				/>
			</MenuItem>
		);
	}
	currentLetter = 'B';
	for (let j = 1; j < tweederangsAantal + 1; j++) {
		arr.push(
			<MenuItem key={currentLetter + j} value={currentLetter + j}>
				{currentLetter + j}
				<Chip
					sx={{
						ml: 1,
						bgcolor: orange[500],
						color: '#000',
					}}
					label={'2de Rang'}
				/>
			</MenuItem>
		);
	}
	currentLetter = 'C';
	for (let j = 1; j < derderangsAantal + 1; j++) {
		arr.push(
			<MenuItem key={currentLetter + j} value={currentLetter + j}>
				{currentLetter + j}
				<Chip
					sx={{
						ml: 1,
						bgcolor: green[500],
						color: '#000',
					}}
					label={'3de Rang'}
				/>
			</MenuItem>
		);
	}
	return arr;
}
import InfiniteScroll from 'react-infinite-scroller';

function SeatChoice(props: props) {
	const { id } = useParams();
	const [seats, setSeats] = React.useState<JSX.Element[]>([]);
	const [loadedSeats, setLoadedSeats] = React.useState<JSX.Element[]>([]);
	const [hasMore, setHasMore] = React.useState(true);
	const getSeats = React.useCallback(async () => {
		return loadSeats(
			props.zaal.eersterangsAantal,
			props.zaal.tweederangsAantal,
			props.zaal.derderangsAantal
		);
	}, [
		props.zaal.derderangsAantal,
		props.zaal.eersterangsAantal,
		props.zaal.tweederangsAantal,
	]);

	const doFirstFetch = React.useCallback(async () => {
		props.connection.invoke('GetDefault', parseInt(id as string));
		props.connection.on('receiveMessage', async (stoelen) => {
			const seatArray = await getSeats();
			const currentStateList = seatArray.filter(
				(seat) => !stoelen.includes(seat.key)
			);
			setSeats(currentStateList);
			setLoadedSeats(currentStateList.slice(0, 10));
		});
	}, [getSeats, id]);

	const waitForSocketConnection = React.useCallback(async () => {
		setTimeout(() => {
			if (
				props.connection.state === signalR.HubConnectionState.Connected &&
        seats.length === 0
			) {
				doFirstFetch();
			} else {
				waitForSocketConnection();
			}
		}, 5);
	}, [doFirstFetch]);

	React.useEffect(() => {
		waitForSocketConnection();
	}, []);

	const handleChange = React.useCallback(
		async (event: SelectChangeEvent<string[]>) => {
			const {target: { value },} = event;
			const prev = props.selection;
			props.setSelection(
				// On autofill we get a stringified value.
				typeof value === 'string' ? value.split(',') : value
			);
			props.connection.invoke('Update', parseInt(id as string), value, prev);
		},
		[id, props]
	);
	props.connection.on('UpdateSeats', async (stoelen: string[]) => {
		const seatArray = await getSeats();
		const filteredSeats = stoelen.filter(
			(seat) => !props.selection.includes(seat)
		);
		const newSeats = seatArray.filter(
			(seat) => !filteredSeats.includes(seat.key as string)
		);
		setSeats(newSeats);
		setLoadedSeats(newSeats.slice(0, 10));
	});
	const loadMore = React.useCallback(() => {
		if (loadedSeats.length >= seats.length) {
			setHasMore(false);
		}
		setLoadedSeats(seats.slice(0, loadedSeats.length + 5));
	}, [loadedSeats.length, seats]);
	const handleClose = React.useCallback(async ()=>{
		setLoadedSeats(seats.slice(0, 10));
	},[seats]);
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
					<Typography variant="h5">Instructies:</Typography>
					<Typography>
            Onze zalen zijn geconfigureert met rijen van Letters en Nummers, De
            letters gaan vanaf A t/m C. Waardoor{' '}
						<i>
							<b>A</b>
						</i>{' '}
            het dichtst is van het stage, en{' '}
						<i>
							<b>C</b>
						</i>{' '}
            het achterste plek is van het zaal is. <br />
            De nummers gaan vanaf{' '}
						<i>
							<b>1</b>
						</i>
            t/m het maximaal aantal zitplaatsen beschikbaar in het zaal. Waarbij{' '}
						<i>
							<b>1</b>
						</i>{' '}
            het linkerste plaats is in het zaal.
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<FormControl fullWidth>
						<Select
							multiple
							displayEmpty
							MenuProps={{
								anchorOrigin: {
									vertical: 'top',
									horizontal: 'left',
								},
								transformOrigin: {
									vertical: 'bottom',
									horizontal: 'left',
								},
								getContentAnchorEl: null,
							}}
							labelId="Stoel selectie"
							value={props.selection}
							onClose={handleClose}
							onChange={handleChange}
							renderValue={(selected) => {
								if (selected.length === 0) {
									return <em>Stoelen</em>;
								}

								return selected.join(', ');
							}}
						>
							<Box
								sx={{
									overflow: 'auto',
									height: 500,
									scrollbarWidth:'thin'
								}}
							>
								<InfiniteScroll
									pageStart={0}
									loadMore={loadMore}
									hasMore={hasMore}
									loader={
										<div className="loader" key={0}>
                      Even Geduld ...
										</div>
									}
									useWindow={false}
								>
									{loadedSeats}
								</InfiniteScroll>
							</Box>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SeatChoice;
