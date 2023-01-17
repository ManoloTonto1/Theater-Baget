import API from './apiRoutes';
import React from 'react';
import UserContext, {
// level 
} from '../context/UserContext';
import { 
	useNavigate 
} from 'react-router';

const isValid = async() => {
		
	const response = await API('validate').Create(
		{
			token: localStorage.getItem('token'),
		}
	);

	return response;
};

export const Signout = (user: { userData?: any; setUser: any; }, role:any) => {
	localStorage.removeItem('token');
	user.setUser(null);
	// role.setRole(level.bezoeker);
};

function JWT(loginRequired:boolean) {
	const { user, role } = React.useContext(UserContext);
	const navigate = useNavigate();

	isValid().then((res)=>{
		// token is valid
		console.log(res.data);
	}).catch((err)=>{
		// token is invalid
		console.log(err);
		Signout(user, role);
		if(loginRequired) {
			navigate('/');
		}
	});
}
export default JWT;