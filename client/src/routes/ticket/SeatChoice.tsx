import React from 'react';
import {
	Box, Fade, Grid 
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Seat from './Seat';
type props = {
  rows: number;
  columns: number;
};
function SeatChoice({ rows, columns }: props) {
	const [selection,setSelection]= React.useState<never[] | string[]>([]);
	const [seats, setSeats] = React.useState<never[] | JSX.Element[]>([]);

	const renderSeats = React.useCallback(() => {
		const seats = [];
		for (let i = 0; i < columns + 1; i++) {
			seats.push(
				<Grid item xs={1}
					display={'flex'} justifyContent={'center'}
					key={`chip${i}`}>
					{i ? <Chip label={i} color={'primary'} /> : <></>}
				</Grid>
			);
		}
		for (let i = 0; i < rows; i++) {
			seats.push(
				<Grid
					item
					xs={1}
					display={'flex'}
					justifyContent={'center'}
					key={String.fromCharCode(65 + i)}
				>
					<Chip label={String.fromCharCode(65 + i)} color={'primary'} />
				</Grid>
			);
			for (let j = 0; j < columns; j++) {
				seats.push(
					<Grid
						item
						xs={1}
						display={'flex'}
						justifyContent={'center'}
						key={String.fromCharCode(65 + i) + (j+1)}
					>
						<Seat
							id={String.fromCharCode(65 + i) + (j+1)}
							setSelection={setSelection}
						/>
					</Grid>
				);
			}
		}

		return seats;
	}, [columns, rows]);
	React.useEffect(() => {
		setSeats([]);
		setSeats(renderSeats());
	}, [renderSeats, selection]);
	return (
		<Box
			sx={{
				mt: 4,
			}}
		>
			<Typography sx={{
				mb:2
			}} variant="h4">Stoel Selectie:</Typography>
			{selection.map((selected) => {
				return (
					<Fade in key={selected}>
						<Chip
							label={selected}
							color={'info'}
							sx={{
								mr: 1,
							}}
						/>
					</Fade>
				);
			})}
			<Grid
				sx={{
					mt: 1,
				}}
				container
				spacing={1}
				columns={columns + 1}
			>
				{seats}
				<Grid item xs={columns + 1}>
					<Box
						sx={{
							p: 2,
							bgcolor: 'white',
							color: 'black',
							borderRadius: 1,
						}}
					>
						<Typography align="center" variant="h5">
                            Scherm
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SeatChoice;
