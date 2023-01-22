import {
	CardActionArea, Grid, Slide 
} from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaidIcon from '@mui/icons-material/Paid';
import {
	useNavigate 
} from 'react-router-dom';

const iconStyles = {
	fontSize: 50,
	mx: 2
};
const buttons = [
	{
		label: 'Ticket Kopen',
		icon: <LocalActivityIcon sx={iconStyles} />,
		path: '/programma'
	},
	{
		label: 'Doneren',
		icon: <PaidIcon sx={iconStyles} />,
		path: '/donate'
	},
];
export function ActionButtons(): JSX.Element {
	const navigate = useNavigate();
	const goToPage = React.useCallback((e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,location:string) : void => {
		e.preventDefault();
		navigate(location);	
	},[navigate]);
	return (
		<Grid container spacing={3}
			sx={{
				mb: 8
			}}>
			{
				buttons.map((data,index) => (
					<Grid item
						xs={12}
						lg={6}
						key={data.label}
					>
						<Slide in
							timeout={325}
							direction={index % 2 ? 'left' : 'right'}>
							<Card elevation={24} sx={{
								bgcolor:'primary.main'
							}}>
								<CardActionArea
									LinkComponent={'a'}
									href={`#${data.path}`}
									onClick={(e) : void => goToPage(e,data.path)}
									sx={{
										p: 1,
										display: 'flex',
									}}>
									{data.icon}
									<Typography variant='h3'
										component={'p'}
										sx={{
											fontWeight: 'bold'
										}}>
										{data.label}
									</Typography>
								</CardActionArea>

							</Card>
						</Slide>
					</Grid>
				)
				)
			}
		</Grid>
	);
}
