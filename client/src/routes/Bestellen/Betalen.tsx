
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import type {
	Programma
} from '../../components/global/globalTypes';
import UserContext from '../../context/UserContext';
import type {
	Data 
} from './types';

type props = {
    data: Programma;
    selection: string[];
    setGegevens: React.Dispatch<React.SetStateAction<Data | null>>
}
function Betalen(props: props) {
	const { user } = React.useContext(UserContext);

	const setGegevens = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		props.setGegevens({
			amount: props.selection.length * 10,
			cardNum: e.target.value
		}
		);
	},[props]);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}
				lg={6}>
				<Card>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant='h4'>
                                    Product:
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant='h6'>
									{props.data.titel}
								</Typography>
								<Typography variant='body2'>
									{props.data.omschrijving}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant='body1'>
                                    Hoeveelheid: {props.selection.length} {props.selection.length === 1
										? 'Ticket' : 'tickets'}
								</Typography>
								<Typography>
                                    Stoelen: {props.selection.map((seat,index) => {
										if (index === props.selection.length - 1) {
											return seat;
										}
										return `${seat}, `;
									})}
									
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<TextField onChange={setGegevens}
									fullWidth
									label={'Rekening nummer' }/>
							</Grid>
						</Grid>

					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}
				lg={6}>
				<Card>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant='h4'>
                                    Gebruiker:
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>
									{user.userData ? user.userData.naam : 'Anoniem'}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

export default Betalen;