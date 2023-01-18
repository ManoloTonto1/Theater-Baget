import {
	Card,
	CardActionArea,
	CardMedia,
	Fade, FormLabel,
	Grid, Typography
} from '@mui/material';
import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import type {
	$TSfixMeAny 
} from '../../../components/global/globalTypes';

type props = {
	imageProps: {
		image: string,
		setImage: (data:string)=>void
	}
	label: string
}
export default function UploadImageCard({ imageProps, label }: props) {
	const inputFile = React.useRef<unknown | $TSfixMeAny>(null);
	const onButtonClick = () => {
		const uploadBtn = inputFile.current as HTMLInputElement;
		if (uploadBtn) {
			uploadBtn.click();
		}

	};
	const handleFileUpload = (e: React.FormEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLInputElement;
		if (!target.files) {
			return;
		}
		const file = target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			imageProps.setImage(reader.result as string);
		};
	};
	const [showChange, setShowChange] = React.useState(false);
	const handleMouseEnter = () => {
		if (imageProps.image) {
			setShowChange(true);
		}
	};
	const handleMouseLeave = () => {
		if (imageProps.image) {
			setShowChange(false);
		}
	};
	return (
		<>
			<FormLabel>{label}</FormLabel>
			<Card sx={{
				mt: 1,
			}}>
				<CardActionArea
					onClick={onButtonClick}
					onChange={handleFileUpload}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<input hidden type="file"
						ref={inputFile}
						accept='image/*' />
					<Fade in={showChange}>
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{
								backgroundColor: 'rgba(0,0,0,0.6)',
								position: 'absolute',
								width: '100%',
								height: '100%'
							}}
						>
							<AddPhotoAlternateIcon sx={{
								color: '#fff',
								mb: 2,
								fontSize: '35pt'
							}} />
							<Typography variant='h6' sx={{
								color: '#fff'
							}}>
								Change Picture
							</Typography>

						</Grid>
					</Fade>

					<CardMedia sx={{
						display: 'flex',
						justifyContent: 'center',
						height: 300,
					}}
					>
						{imageProps.image ? <img loading='lazy' src={imageProps.image}
							alt="" /> : (
							<Grid
								container
								spacing={0}
								direction="column"
								alignItems="center"
								justifyContent="center"
							>
								<AddPhotoAlternateIcon sx={{
									mb: 2,
									fontSize: '35pt'
								}} />
								<Typography variant='h6'>
									Upload Picture
								</Typography>

							</Grid>
						)}
					</CardMedia>

				</CardActionArea>
			</Card>
		</>

	);
}