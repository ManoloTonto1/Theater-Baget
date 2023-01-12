import UserContext from '../context/UserContext';
import { 
	buildRequestParams 
} from './RequestBuilder';

export const validate = async (user:any) => {
	const params = buildRequestParams({
		token: localStorage.getItem('token'),
	});

	const request = await fetch(`api/validate?${params}`);
      
	if (!request.ok) { 
        // clear user

        localStorage.removeItem('token');

		user.setUser(
			{
			}
		); 
		return false; 
	} 
	return true;
};