import React from 'react';
import {
	Grow,
	IconButton,
	InputAdornment, TextField 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
export default function Searchbar({
	placeholderText,
	setSearchTermValue,
	searchTermValue
}:
	{
		placeholderText: string,
		setSearchTermValue: (val: string) => void
		searchTermValue : string
	})
{
	const [clearButton,setClearButton] = React.useState(false);
	const [val, setVal] = React.useState(searchTermValue);
	
	const handleChange = React.useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
		setVal(event.target.value);

		if (!event.target.value) {
			setClearButton(false);
			return;
		}
		setClearButton(true);
	}, [setVal]);

	const handleClear = React.useCallback(async () => {
		const search = document.getElementById('search-bar') as HTMLInputElement;
		search.value = '';
		setVal('');
		setClearButton(false);
		search.focus();
	}, []);
	
	React.useEffect(() => {
		const delayDebounceFn = setTimeout(async () => {
			setSearchTermValue(val);
		}, 400);

		return () => clearTimeout(delayDebounceFn);

	},[val,setSearchTermValue]);
	
	return (
		<TextField 
			id='search-bar'
			label={placeholderText}
			size='small'
			defaultValue={searchTermValue}
			onChange={handleChange}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
				endAdornment: (
					<Grow timeout={200} in={clearButton}>
						<InputAdornment position='end'>
							<IconButton size='small' onClick={handleClear}>
								<CloseIcon fontSize='small' />
							</IconButton>
						</InputAdornment>
					</Grow>
				)

			}}
		/>
	);
}