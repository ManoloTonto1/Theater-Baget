import React from 'react';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import IconButton from '@mui/material/IconButton';
import {
	Tooltip 
} from '@mui/material';
type props = {
  id: string;
  setSelection: React.Dispatch<React.SetStateAction<never[] | string[]>>;
};
function Seat(props: props) {
	const[isSelected,setSelected] =React.useState(false);
	const addToSelection = React.useCallback(() => {
		props.setSelection(current => {
			if (current.find((val) => val === props.id)) {
				setSelected(false);
				return current.filter((val)=> val !== props.id);
			}
			if (current.length === 10) {
				return current;
			}
			setSelected(true);
			return [...current, props.id];
		});
	},[props]);
	return (
		<Tooltip title={props.id}>
			<IconButton
				onClick={addToSelection}
				color={isSelected ? 'secondary' : 'default'}
			>
				<EventSeatIcon fontSize="large" />
			</IconButton>
		</Tooltip>
	);
}

export default Seat;