import API from './apiRoutes';
import React from 'react';
import UserContext, {
	level 
} from '../context/UserContext';

function JWT() {
	const [isValid, setValid] = React.useState(false);
	const { user, role } = React.useContext(UserContext);
	React.useEffect(() => {
		API('validate').Create(
			{
				token: localStorage.getItem('token'),
			}
		).then((res) => {
			if(res.status == 200) {
				setValid(true);
			}
		}).catch((err) => {
			console.log(err);
			localStorage.removeItem('token');
		
			user.setUser(null); 
			role.setRole(level.bezoeker);
			setValid(false); 
		});
	});
	return isValid;
   
}

export default JWT;