import type {
	Theme
} from '@mui/material';
import {
	createTheme
} from '@mui/material';
import {
	red, yellow 
} from '@mui/material/colors';
import React from 'react';
import type {
	$TSfixMeAny 
} from '../components/global/globalTypes';

export enum level
{
    bezoeker, donateur, medewerker,acteur,admin,bandlid
}

export enum leeftijdsGroep
{
    Tiener, Volwassenen, Senior
}
export type userData = {
	id: number,
	naam: string,
	email: string,
	leeftijdsGroep: string,
	token: string
}
type contextData = {

    user: {
        userData: userData | null;
        setUser: React.Dispatch<React.SetStateAction<userData| null>>;
    };
    role: {
        role: level;
        setRole: React.Dispatch<React.SetStateAction<level>>;
    };
    theme: {
        theme: Theme;
        isDarkMode: boolean;
        toggleDarkMode: () => void
    }

}

const UserContext = React.createContext<contextData>(null as $TSfixMeAny);

export const UserProvider = ({ children }: $TSfixMeAny) => {
	// If no item is present when in dark mode, just give the user darkMode as default
	if (!localStorage.getItem('darkMode')) {
		localStorage.setItem('darkMode', 'dark');
	}
	
	const [darkMode, setDarkmode] = React.useState(localStorage.getItem('darkMode') === 'dark');
	const theme = createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light',
			primary: {
				main: red['A700'],
			},
			secondary: {
				main: yellow[500],
			},
		},

	});
	const toggleDarkMode = React.useCallback(async () => {
		setDarkmode(!darkMode);
		localStorage.setItem('darkMode', darkMode ? 'light' : 'dark');
	}, [darkMode]);
    
	const [userData, setUser] = React.useState<null | userData>(null);
    
	const [role, setRole] = React.useState(level.bezoeker);

	const store: contextData = {
		user: {
			userData, setUser
		},
		role: {
			role: role, setRole: setRole
		},
		theme: {
			theme,
			isDarkMode: darkMode,
			toggleDarkMode
		}
	};

	return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContext;