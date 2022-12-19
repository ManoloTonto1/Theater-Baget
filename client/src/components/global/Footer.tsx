import React from 'react';
import {
	Link, Typography, TypographyProps
} from '@mui/material';

/**
 * The copyright footer.
 *
 * @export
 * @param {*} props
 * @returns {*}
 */
export default function Footer(props: TypographyProps) {
	return (
		<Typography variant="body2" color="text.secondary"
			align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://matias.ma/nsfw/">
                Theater Baget
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}