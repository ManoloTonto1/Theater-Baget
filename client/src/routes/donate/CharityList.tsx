import React from 'react';
import {
	Card, Grid
} from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
	Box
} from '@mui/system';
type Charity = {
    name: string
    image: string
    description:string
}
const charities: Charity[] = [
	{
		name: 'Dieren Lot',
		image: 'https://www.dier.nu/resources/images/logo.svg',
		description: ` Nog veel te veel dieren leiden
                        in Nederland een buitengewoon
                        beroerd bestaan.
                        Ze worden opgesloten in veel te kleine hokken, soms ernstig mishandeld,
                        gewond op straat gezet of gewoon maar aan hun lot overgelaten.
                        Dit kan niet en dit mag niet gebeuren.
                        `,
	},
	{
		name: 'War Child',
		image: 'https://www.warchild.nl/static/images/logo-warchild.svg',
		description: `Veel kinderen in oorlog doen ’s nachts geen oog dicht.
         Zelfs niet met een knuffel,
          een liedje of verhaaltje voor het slapen gaan.
           Nachtmerries spoken door hun hoofd. En overdag? Dan gaat de nachtmerrie door. `
	},
	{
		name: 'De Haagse Hogeschool',
		// eslint-disable-next-line max-len
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Haagse_Hogeschool_logo_vector.svg/2560px-Haagse_Hogeschool_logo_vector.svg.png',
		description: ` 	De Haagse Hogeschool ("HHS", "De Haagse", "THUAS") biedt hbo-opleidingen aan
         op bachelorniveau (voltijd, deeltijd, duaal) en op master- en post-hbo-niveau.
         De hogeschool heeft een internationaal karakter. Locaties van De Haagse Hogeschool bevinden
          zich in de Haagse wijk Laakhaven, vlak bij station Hollands Spoor (hoofdlocatie),
           aan de Mr. P. Droogleever Fortuynweg in Den Haag (Sportcampus Zuiderpark),
            in Zoetermeer (Dutch Innovation Park) en in Delft op de campus van de TU Delft. `
	},
	{
		name: 'Muziek Speelplaats',
		image: 'https://demuziekspeelplaats.nl/wp-content/uploads/2019/09/cropped-logo_demuziekspeelplaats-1.png',
		description: `Stichting de Muziekspeelplaats wil muziek zoveel mogelijk toegankelijk maken voor ieder kind.
         Wij helpen en ondersteunen lokale boegbeelden (prominente buurtbewoners
             die zich ontwikkelen tot muzikale leiders)
          om in hun eigen wijk een Muziekspeelplaats op te zetten, te organiseren en te onderhouden. `
	}
];

type props = {
    setChosenCharity: React.Dispatch<React.SetStateAction<string>>
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export default function CharityList(props: props): JSX.Element {
	const setChosenCharity = React.useCallback(async (charity:string) => {
		props.setChosenCharity(charity);
		props.setCurrentStep(1);
	}, [props]);
    
	return (
		<>
			{charities.map((charity) => (
				<Grid
					key={charity.name}
					item
					xs={12}
					display='flex'
					justifyContent={'center'}
				>
					<Card elevation={3}>
						<CardActionArea onClick={(): Promise<void> => setChosenCharity(charity.name)} sx={{
							display: 'flex'
						}}>
							<CardMedia
								component={'img'}
								src={charity.image}
								sx={{
									p: 2,
									width: 100
								}} />
							<Box mx={2}>
								<Typography variant='body2' color={'primary.main'}>
                                    Beschrijving
								</Typography>
								<Typography variant='body1'>
									{charity.description}
								</Typography>
							</Box>

						</CardActionArea>
					</Card>
				</Grid>
			))
			}
		</>
		
	);
}
