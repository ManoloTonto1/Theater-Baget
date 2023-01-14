import {
	Button,
	CircularProgress,
	Grid,
	Grow,
	Typography
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
	green, red
} from '@mui/material/colors';
import React from 'react';

import type {
	Charity, Data
} from './types';

type props = {
    chosenCharity: Charity | null
    data: Data;
}
enum states {
    inProgress,
    done,
    failed
}

import {
	useNavigate 
} from 'react-router-dom';
import API from '../../api/apiRoutes';

function PostDonation(props: props): JSX.Element {
	const [state, setState] = React.useState<states>(states.inProgress);
	const navigate = useNavigate();
	React.useEffect(() => {
		const req = async (): Promise<void> => {
			setState(states.inProgress);
			if (!props.chosenCharity?.id) return; 
			API('external').Donate(
				'test@email.com',
				props.data.amount,
				props.chosenCharity?.id,
				props.data.comment
			).then((res) => {
				if (res.status !== 200) {
					setState(states.failed);
					return;
				}
				setState(states.done);
			}).catch(() => {
				setState(states.failed);
			});
		};
		req();
	}, [props]);

	return (
		<>
			{state === states.inProgress && (
				<>
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<CircularProgress size={200} sx={{
							mt: 2,
							color: green[500]
						}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h3' align='center'>
                            Even geduld AUB
						</Typography>
					</Grid>
				</>
			)}
			{state === states.done && (
				<>
					<Grow in>
						<Grid item xs={12}
							display='flex'
							justifyContent={'center'}>
							<CheckCircleOutlineIcon sx={{
								fontSize: 200,
								mt: 2,
								color: green[500]
							}}
							/>
						</Grid>

					</Grow>
					<Grid item xs={12}>
						<Typography variant='h3' align='center'>
							Donatie Gelukt
						</Typography>
						<Typography variant='h3' align='center'>
                            Dank u wel!
						</Typography>
					</Grid>
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<Button variant='contained' onClick={()=>navigate(-1)}>
                            Terug naar home pagina
						</Button>
					</Grid>
				</>
			)}
			{state === states.failed && (
				<>
					<Grow in>
						<Grid item xs={12}
							display='flex'
							justifyContent={'center'}>
							<HighlightOffIcon sx={{
								fontSize: 200,
								mt: 2,
								color: red[500]
							}}
							/>
						</Grid>

					</Grow>
					<Grid item xs={12}>
						<Typography variant='h3' align='center'>
                            Donatie niet gelukt.
						</Typography>
						<Typography variant='h3' align='center'>
                            Probeer later
						</Typography>
					</Grid>
					<Grid item xs={12}
						display='flex'
						justifyContent={'center'}>
						<Button variant='contained' onClick={()=>navigate(-1)}>
                            Terug naar home pagina
						</Button>
					</Grid>
				</>
			)}
		</>
	);
}

export default PostDonation;