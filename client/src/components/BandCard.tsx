import {
	Card, Grid, Avatar, Box, Typography, Accordion, AccordionDetails, AccordionSummary 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export type BandCardProps = {
    id: number,
    name: string,
    image: string,
    omschrijving: string,
    link: string
}

export function BandCard(props:BandCardProps) {
	return (
		<Card elevation={4} sx={{
			marginBottom: 2,
			display: 'flex',
			justifyContent: 'center',
			width: '100%'
		}}>
			<Grid container>
				<Avatar
					alt={props.name}
					src={props.image}
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
					<Typography>
                        Naam: {props.name}
					</Typography>
					<Typography>
						<a href={props.link}>website</a>
					</Typography>
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