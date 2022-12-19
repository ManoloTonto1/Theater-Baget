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
			mode: !darkMode ? 'dark' : 'light',
			primary: {
				main: yellow[500],
			},
			secondary: {
				main: red['A700'],
			},
			// background: {
				
			//   default: !darkMode 
			//   ? 'linear-gradient(180deg, rgba(75,75,75,1) 0%, rgba(32,32,32,1) 100%)'
			//   : 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,235,235,1) 100%)',
			// },
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
function rgb(arg0: number, arg1: number, arg2: number) {
	throw new Error('Function not implemented.');
}

function gradient(arg0: number, deg: any, arg2: any, arg3: number, arg4: any, arg5: number) {
	throw new Error('Function not implemented.');
}

function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any {
	throw new Error('Function not implemented.');
}