import {
	Box, Button, Card, Divider, FormGroup, InputLabel, MenuItem, Select, TextField, Typography 
} from '@mui/material';
import {
	LocalizationProvider, DatePicker 
} from '@mui/x-date-pickers';
import {
	AdapterDayjs 
} from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import type {
	Dayjs 
} from 'dayjs';
import dayjs from 'dayjs';
import React, {
	useCallback 
} from 'react';
import API from '../../../api/apiRoutes';
import UserContext, { 
	level 
} from '../../../context/UserContext';

function GebruikerToevoegen() {
	const { user, role } = React.useContext(UserContext);
	
	const [groups, setGroups] = React.useState([]);
	const [selectedGroup, setSelectedGroup] = React.useState();
	
	const [betrokkenen, setbetrokkenen] = React.useState([]);
	const [selectedBetrokkene, setSelectedBetrokkene] = React.useState();

	React.useEffect(() => {
		async function getGroups() {
			const groupData = (await API('groepen').GetAll()).data;
			console.log(groupData);
			setGroups(groupData);
		}
		
		async function getBetrokkenen() {
			const result = [];
			const userData = (await API('gebruikers').GetAll()).data;
			userData.forEach((user: { level: level; }) => {
				if(user.level == level.acteur || user.level == level.bandlid) {
					result.push(user);
				}
			});

			setbetrokkenen(result);
		}
		
		getGroups();
		getBetrokkenen();
	}, [setGroups]);

	const groupList = groups.length > 0
	&& groups.map((user: any, i: any) => {
		return (
			<MenuItem key={i} value={user}>{user.naam}</MenuItem>
		);
	});

	const betrokkeneList = betrokkenen.length > 0
	&& betrokkenen.map((user: any, i: any) => {
		return (
			<MenuItem key={i} value={user}>{user.naam}</MenuItem>
		);
	});

	const handleGroupSelectChange = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
		setSelectedGroup(e.target.value);
	}, [setSelectedGroup]);
	
	const handleBetrokkeneSelectChange = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
		setSelectedBetrokkene(e.target.value);
	}, [setSelectedBetrokkene]);

	const voegToe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(selectedGroup == null || selectedBetrokkene == null) {
			return;
		}

		await API('betrokkenenToevoegen').Create({
			betrokkene: selectedBetrokkene,
			groep: selectedGroup
		});
	};

	return (
		<Box
			component = 'form'
			onSubmit={voegToe}
			sx={{
				p: 3
			}}>
			<FormGroup>
				<Typography variant="h5">
                Betrokken toevoegen aan groep
				</Typography>
				<InputLabel>Gebruiker</InputLabel>
				<Select
					variant='standard'
					value={selectedBetrokkene}
					onChange={handleBetrokkeneSelectChange}
					>
					{betrokkeneList}
				</Select>
				<InputLabel>Groep</InputLabel>
				<Select
					variant='standard'
					value={selectedGroup}
					onChange={handleGroupSelectChange}
				>
					{groupList}
				</Select>

				<Button variant='contained' type='submit'>
						Toevoegen
				</Button>
			</FormGroup>
		</Box>
	);
}
        
export default GebruikerToevoegen;