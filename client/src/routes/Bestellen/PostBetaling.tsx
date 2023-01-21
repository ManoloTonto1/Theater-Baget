import {
	Box,
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
	Data
} from './types';

type props = {
	connection: signalR.HubConnection;
	data: Data;
	selection: never[] | string[];
} 
enum states {
	inProgress,
    done,
    failed
}

import {
	useNavigate, useParams 
} from 'react-router-dom';
import API from '../../api/apiRoutes';
import UserContext from '../../context/UserContext';
import QRCode from 'react-qr-code';

function PostBetaling(props: props): JSX.Element {
	const { user } = React.useContext(UserContext);
	const { id } = useParams();
	const [state, setState] = React.useState<states>(states.inProgress);
	const [qrCode,setQrCode] = React.useState('');
	const navigate = useNavigate();
	React.useEffect(() => {
		const req = async (): Promise<void> => {
			setState(states.inProgress);
			const ref = crypto.randomUUID();
			const payment = await API('external').Pay(
				props.data.amount,
				ref,
				''
			).catch(() => {
				setState(states.failed);
				
			});
			if (payment.status !== 200) {
				setState(states.failed);
				return;
			}
			const paymentLog = await API('reserveringen').Create({
				stoelen: props.selection,
				programmeringId: parseInt(id as string),
				referenceCode: ref,
				amountPaid: props.data.amount,
				userId: user.userData?.id

			}).catch(() => {
				setState(states.failed);
				
			});
			if (paymentLog.status !== 200) {
				setState(states.failed);
				return; 
			}
			setQrCode(paymentLog.data);
			props.connection.invoke('Unsubscribe',parseInt(id as string));
			setState(states.done);
		};
		req();
	}, [id, props, user.userData?.id]);

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
                            Betaling Gelukt
						</Typography>
						<Typography variant='h3' align='center'>
                            Dank u wel!
						</Typography>
					</Grid>
					<Grid item xs={12}
						sx={{
							pt:2
						}}>
						<Typography variant='h5' align='center'>
                            Uw ticket staat klaar, Bewaar het.
						</Typography>
					</Grid>
					<Grid item xs={12}
						sx={{
							p:2
						}}>

						<QRCode
							size={256}
							style={{
								width: '100%',
							}}
							value={qrCode}
							viewBox={'0 0 256 256'}
						/>
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
                            Betaling niet gelukt.
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

export default PostBetaling;