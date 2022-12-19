import React from 'react';
import {
	Grid,
	Link, Typography, TypographyProps
	, ThemeProvider, 
	IconButton,
	Box,
	Container
} from '@mui/material';
import UserContext from '../../context/UserContext';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
/**
 * The copyright footer.
 *
 * @export
 * @param {TypographyProps} props
 * @returns {JSX.Element}
 */
export default function Footer(props: TypographyProps) {
	const { theme } = React.useContext(UserContext);
	return (
		<ThemeProvider theme={theme.theme}>
			<Box sx={{
				py:2,
				bgcolor: 'primary.main',
				height: '100%',
			}}>
				<Container>
					<Grid
						container
						spacing={1}
						sx={{
							width: 400
						}}>
                        
						<Grid item xs={12}>
							<Typography>
                                Follow ons op onze Sociale media!
							</Typography>

						</Grid>
						<Grid item xs={2}>
							<IconButton href="https://twitter.com/elonmusk?">
								<TwitterIcon />
							</IconButton>
						</Grid>
						<Grid item xs={2}>
							<IconButton href='https://youtu.be/9zLWwGQf7v8'>
								<YouTubeIcon />
							</IconButton>
						</Grid>
						<Grid item xs={2}>
							<IconButton href='tel:+31-0669696969'>
								<LocalPhoneIcon />
							</IconButton>
						</Grid>
						<Grid item xs={2}>
							<IconButton href='mailto:bitch@gmail.com'>
								<EmailIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Typography
						variant="body2"
						color="text.secondary"
						align="center" {...props}>
						{'Copyright © '}
						<Link color="inherit" href="https://matias.ma/nsfw/">
                            Theater Baget
						</Link>
						{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>
				</Container>    
			</Box>
		</ThemeProvider>
	);
}