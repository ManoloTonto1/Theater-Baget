import React from 'react';
import {
	useLocation
} from 'react-router-dom';
import API from '../api/apiRoutes';
import UserContext from '../context/UserContext';

function useAuth() {
	const { user, role } = React.useContext(UserContext);

	const [isValid, setValid] = React.useState(false);
	const location = useLocation();
	React.useEffect(() => {
		if (!localStorage.getItem('token')) {
			setValid(false);
		}
		if (!user.userData) {
			API('validate').Get('user')
				.then((res) => {
					if (res.status != 200) {
						localStorage.removeItem('token');
						user.setUser(null);
						return;
					}
					setValid(true);
					user.setUser({
						email: res.data.gebruiker.loginGegevens.email,
						id: res.data.gebruiker.id,
						naam: res.data.gebruiker.naam,
						token: localStorage.getItem('token') as string,
						leeftijdsGroep: res.data.gebruiker.leeftijdsGroep
						
					});
					role.setRole(res.data.gebruiker.level);
	
				}).catch(() => {
					localStorage.removeItem('token');
					user.setUser(null);
				});	
			return;
		}
		API('validate').Get(undefined)
			.then((res) => {
				if (res.status != 200) {
					localStorage.removeItem('token');
					user.setUser(null);
					return;
				}
				setValid(true);

			}).catch(() => {
				localStorage.removeItem('token');
				user.setUser(null);
			});
	}, [location]);
	
	return isValid;
}

export default useAuth;