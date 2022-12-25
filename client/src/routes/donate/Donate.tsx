import {
	Card, Grid, Slide 
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import {
	Box,
	Container, 
} from '@mui/system';
import React from 'react';
import CharityList from './CharityList';
import PayDetails from './PayDetails';
import type {
	Charity 
} from './types';

function Donate(): JSX.Element{
	const [currentStep, setCurrentStep] = React.useState(0);
	const [chosenCharity, setChosenCharity] = React.useState<Charity | null>(null);
	const [animationIn, setAnimationIn] = React.useState(true);
	const [isAnimationDone,setAnimationDone] = React.useState(false);
	
	const nextStep = React.useCallback(async () => {
		setAnimationIn(false);
		setCurrentStep((current) => current + 1);
	}, []);
	
	const previousStep = React.useCallback(async() => {
		setCurrentStep((current)=> current--);	
	}, []);
	
	return (
		<Container>
			<Box
				display={'flex'}
				justifyContent='center'
				m={4}>
				<Card
					elevation={3}
					sx={{
						width: '100%',
						height: 600,
						p: 2,
						overflow: 'auto',
						scrollbarWidth:'thin'
					}}>
						
					<CardContent>
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
									<StepLabel>Goede Doel Kiezen</StepLabel>
								</Step>
								<Step>
									<StepLabel>Betaal gegevens</StepLabel>
								</Step>
								<Step>
									<StepLabel>Donatie bevestigen</StepLabel>
								</Step>
							</Stepper>
						</Card>
						<Slide in={animationIn}
							direction={animationIn ? 'left' : 'right'}>
							<Grid container
								spacing={3}
								pt={2}
							>
								{currentStep === 0 && (
									<CharityList
										setChosenCharity={setChosenCharity}
										nextStep={nextStep} />)
								}
								{currentStep === 1 && (
									<PayDetails
										chosenCharity={chosenCharity}
										nextStep={nextStep} />)
								}
							</Grid>
						</Slide>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
}

export default Donate;
