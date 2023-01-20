import {
	Card, Grid, Avatar, Box, Typography, Accordion, AccordionDetails, AccordionSummary, Button 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type {
	Groep
} from '../components/global/globalTypes';
import React from 'react';

export function BandCard(props:Groep) {
	return (
		<Card elevation={4} sx={{
			marginBottom: 2,
			display: 'flex',
			justifyContent: 'center',
			width: '100%'
		}}>
			<Grid container>
				<Avatar
					alt={props.naam}
					src={props.afbeelding}
					sx={{
						width: 100,
						height: 100,
						m: 2
					}} />
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column'
				}}>
					<Typography variant='h4'>
                    	{props.naam}
					</Typography>
					<Button LinkComponent={'a'} variant="contained" target="_blank"
						href={props.websiteUrl}>
  						Website
					</Button>
				</Box>
				<Accordion sx={{
					width: '100%'
				}}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Beschrijving</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							{props.omschrijving}
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Card>
	);
}