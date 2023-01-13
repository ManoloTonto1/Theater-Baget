import {
	Card, CardContent, Container, Step, StepLabel, Stepper
} from '@mui/material';

import React, {
} from 'react';

import Typography from '@mui/material/Typography';
import {
	Ticket 
} from '../../components/Ticket';
import {
	useParams 
} from 'react-router-dom';
import LoadingPage from '../../components/global/LoadingPage';
import API from '../../api/apiRoutes';
import type {
	Programma 
} from '../../components/global/globalTypes';
import SeatChoice from './SeatChoice';

function TicketKopen() {
	const { id } = useParams();
	const [data, setData] = React.useState<null | Programma>(null);
	const [currentStep, setCurrentStep] = React.useState(0);

	React.useEffect(() => {
		API('programmeringen')
			.Get(id)
			.then((res) => {
				setData(res.data);
			});
	}, [id]);
	return (
		<Container
			sx={{
				height: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				my:4
			}}
		>
			{data ? (
				<Card
					elevation={4}
					sx={{
						width: '100%',
						maxHeight: '80vh',
						overflow: 'auto',

					}}
				>
					<Card elevation={4}
						sx={{
							zIndex:10000,
							p:1,
							position: 'sticky',
							top: 0,
							bgcolor: 'background.default',
						}}>
						<Stepper activeStep={currentStep} alternativeLabel>
							<Step>
								<StepLabel>Stoelen Kiezen</StepLabel>
							</Step>
							<Step>
								<StepLabel>Betaal gegevens</StepLabel>
							</Step>
							<Step>
								<StepLabel>Bestelling bevestigen</StepLabel>
							</Step>
						</Stepper>
					</Card>
					<CardContent>
						{currentStep === 0 && (
							<>
								<Typography
									variant="h4"
									sx={{
										pb: 2,
									}}
								>
							Bestelling
								</Typography>
								<Ticket {...data} />
								<SeatChoice columns={15} rows={10} />
							</>
						)}

					</CardContent>
				</Card>
			) : (
				<LoadingPage />
			)}
		</Container>
	);
}

export default TicketKopen;