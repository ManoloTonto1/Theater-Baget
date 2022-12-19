import {
	createTheme, Theme
} from '@mui/material';
import {
	red, yellow 
} from '@mui/material/colors';
import React from 'react';
import {
	$TSfixMeAny 
} from '../components/global/globalTypes';

type TRole = 'admin' | 'medewerker' | 'user' | 'donateur'

const initRole: TRole = 'admin';

type contextData = {

    user: {
        userData: $TSfixMeAny;
        setUser: React.Dispatch<React.SetStateAction<$TSfixMeAny>>;
    };
    role: {
        role: TRole;
        setRole: React.Dispatch<React.SetStateAction<$TSfixMeAny>>;
    };
    theme: {
        theme: Theme;
        isDarkMode: boolean;
        toggleDarkMode: () => void
    }

}

const UserContext = React.createContext<contextData>(null as $TSfixMeAny);

export const UserProvider = ({ children }: $TSfixMeAny) => {
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
    
	const [userData, setUser] = React.useState({
	});
    
	const [role, setRole] = React.useState(initRole);

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
