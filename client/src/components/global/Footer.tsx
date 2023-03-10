import React from 'react';
import type {
	TypographyProps
} from '@mui/material';
import {
	Link, Typography,
	ThemeProvider, 
	IconButton,
	Box
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
export default function Footer(props: TypographyProps) :JSX.Element {
	const { theme } = React.useContext(UserContext);
	return (
		<ThemeProvider theme={theme.theme}>
			<Box sx={{
				py:2,
				bgcolor: 'primary.main',
				height: '100%',
				color:'#fff'
			}}>
				<Typography align={'center'}>
					Follow ons op onze Sociale media!
				</Typography>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						my: 1,
					}}>
					<IconButton
						LinkComponent={'a'}
						aria-label={'Redirect naar de Twitter Pagina'}
						href="https://twitter.com/elonmusk?"
						color='secondary'>
						<TwitterIcon aria-label='Twitter icoon'/>
					</IconButton>
					<IconButton
						LinkComponent={'a'}
						aria-label={'Redirect naar de Youtube Pagina'}
						href='https://youtu.be/9zLWwGQf7v8' color='secondary'>
						<YouTubeIcon aria-label='Youtube icoon' />
					</IconButton>
					<IconButton
						LinkComponent={'a'}
						aria-label={'het Theater bellen'}
						href='tel:+31-0669696969' color='secondary'>
						<LocalPhoneIcon aria-label='Telefoon icoon' />
					</IconButton>
					<IconButton
						LinkComponent={'a'}
						aria-label={'Stuur een e-mail naar het Theater'}
						href='mailto:bitch@gmail.com' color='secondary'>
						<EmailIcon aria-label='Email icoon'/>
					</IconButton>
				</Box>
				<Typography
					variant="body2"
					color='#fff'
					align="center" {...props}>
					{'Copyright © '}
					<Link color="inherit" href="https://matias.ma/nsfw/">
                            Theater Baget
					</Link>
					{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
				  
			</Box>
		</ThemeProvider>
	);
}