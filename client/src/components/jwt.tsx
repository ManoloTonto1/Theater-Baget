import UserContext from '../context/UserContext';
import { 
	buildRequestParams 
} from './RequestBuilder';

export const validate = async (user:any) => {
	const params = buildRequestParams({
		token: user.userData.token,
	});

	const request = await fetch(`api/validate?${params}`, {
		method: 'POST'
	});

	const response = await request.json();
	console.log(response);
      
	if(response == true) {
		return true;
	} else {
		user.setUser(
			{
			}
		);
            
		return false;
	}
};