import React, {
	useCallback
} from 'react';
import {
	Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Typography,
} from '@mui/material';
import API from '../../../api/apiRoutes';

function GebruikerInzien() {

	const [users, setUsers] = React.useState([]);
	const [selectedUser, setSelectedUser] = React.useState();
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		async function getUsers() {
			const userData = (await API('gebruikers').GetAll()).data;
			setUsers(userData);
		}

		getUsers();
	}, [setUsers]);

	const usersList = users.length > 0
		&& users.map((user: any, i: any) => {
			return (
				<MenuItem key={i} value={user}>{user.naam}</MenuItem>
			);
		});

	const handleSelectChange = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
		setSelectedUser(e.target.value);
	}, [setSelectedUser]);

	const handleClickOpen = useCallback(() => {
		setOpen(true);
	}, [setOpen]);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	return (
		<Box
			component = 'form'
			id='form'
			sx={{
				p: 3
			}}>
			<Typography
				sx={{
					pb:2
				}}
			>Gebruiker inzien</Typography>

			<FormControl fullWidth>
					
				<InputLabel>Gebruiker</InputLabel>
				<Select
					variant='standard'
					value={selectedUser}
					onChange={handleSelectChange}
				>
					{usersList}
				</Select>
				<Button
					variant='contained'
					onClick={handleClickOpen}
				>
							Inzien
				</Button>
			</FormControl>

			{
				selectedUser != null &&
				<Dialog
					open={open}
					onClose={handleClose}
				>
					<DialogTitle>
						{selectedUser.naam}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<Typography variant="overline" display='block'>
								id: #{selectedUser.id}
							</Typography>
							<Typography variant="overline" display='block'>
								leeftijdsgroep: {selectedUser.leeftijdsGroep}
							</Typography>
							<Typography variant="overline" display='block'>
								level: {selectedUser.level}
							</Typography>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} autoFocus>Close</Button>
					</DialogActions>
				</Dialog>
			}
		</Box >
	);
}

export default GebruikerInzien;