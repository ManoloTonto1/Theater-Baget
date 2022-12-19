import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
	useCallback,
} from 'react';
import {
	useNavigate
} from 'react-router-dom';
import {
	Divider,
	IconButton, Tooltip, Typography
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import UserContext from '../../context/UserContext';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar({ isMenuOpen: openSidebarMenu, setMenuOpen }:
    { isMenuOpen: boolean, setMenuOpen(value: any): void }) {
	const { role } = React.useContext(UserContext);
	const navigate = useNavigate();
	const toggleDrawer =
        useCallback((anchor: Anchor, open: boolean) =>
        	(event: React.KeyboardEvent | React.MouseEvent) => {
        		if (
        			event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
        		) {
        			return;
        		}

        		setMenuOpen(open);
        	}, [setMenuOpen]);

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: 250
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				m: 2
			}}>
				<Typography sx={{
					lineHeight: 1.5
				}}
				variant={'h5'}>
					{'Menu'}
				</Typography>

				<Tooltip title={'Close the Calendar'}>
					<IconButton
						onClick={toggleDrawer('left', false)}>
						<ArrowBackIosNewIcon />
					</IconButton>
				</Tooltip>

			</Box>
			<Divider sx={{
				m: 2
			}} />

			<List>
				<ListItem
					disablePadding>
					<ListItemButton onClick={() => navigate(`/${''}`)}>
						<ListItemIcon>
							{<InboxIcon />}
						</ListItemIcon>
						<ListItemText primary={'menu'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Drawer
			anchor={'left'}
			open={openSidebarMenu}
			onClose={toggleDrawer('left', false)}
		>
			{list('left')}
		</Drawer>
	);
}
