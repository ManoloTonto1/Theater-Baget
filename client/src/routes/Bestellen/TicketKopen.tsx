import {
	Box,
	Card,
	CardContent,
	Container,
	Step,
	StepLabel,
	Stepper,
} from '@mui/material';

import React from 'react';

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
import Button from '@mui/material/Button';
import Betalen from './Betalen';
import Confirm from './Confirm';
import type {
	Data 
} from './types';
import PostBetaling from './PostBetaling';

function TicketKopen() {
	const { id } = useParams();
	const [data, setData] = React.useState<null | Programma>(null);
	const [currentStep, setCurrentStep] = React.useState(0);
	const [selection, setSelection] = React.useState<never[] | string[]>([]);
	const [gegevens,setGegevens] = React.useState<Data | null>(null);
	const previousStep = React.useCallback(async () => {
		setCurrentStep((current) => current - 1);
	}, []);
	const nextStep = React.useCallback(async () => {
		setCurrentStep((current) => current + 1);
	}, []);
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
				my: 4,
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
					<Card
						elevation={4}
						sx={{
							zIndex: 100,
							p: 1,
							position: 'sticky',
							top: 0,
							bgcolor: 'background.default',
						}}
					>
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
								<SeatChoice
									{...data}
									selection={selection}
									setSelection={setSelection}
								/>
							</>
						)}
						{currentStep === 1 && (
							<>
								<Typography
									variant="h4"
									sx={{
										pb: 2,
									}}
								>
									Betaal Gegevens:
								</Typography>
								<Betalen data={data}
									selection={selection}
									setGegevens={setGegevens}
								/>
							</>
						)}
						{currentStep === 2 && (
							<>
								<Typography
									variant="h4"
									sx={{
										pb: 2,
									}}
								>
									Betaal Gegevens:
								</Typography>
								<Confirm data={gegevens}
									nextStep={nextStep}
									previousStep={previousStep}
									ticket={data}
								/>
							</>
						)}
						{currentStep === 3 && gegevens && (
							<PostBetaling
								data={gegevens}

							/>								
						)
						}
						{currentStep < 2 && <Box
							sx={{
								my: 4,
							}}
						>
							<Button
								variant="contained"
								onClick={nextStep}
								sx={{
									mr: 2,
								}}
							>
								Volgende Stap
							</Button>
							<Button
								disabled={currentStep === 0}
								variant="outlined"
								onClick={previousStep}
							>
								Voorige Stap
							</Button>
						</Box>}
					</CardContent>
				</Card>
			) : (
				<LoadingPage />
			)}
		</Container>
	);
}

export default TicketKopen;
