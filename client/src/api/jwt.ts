import API from './apiRoutes';

export const validate = async (user:any) => {

	API('validate').Create(
		{
			token: localStorage.getItem('token'),
		}
	).then((res) => {
		if(res.status == 200) {
			return true;
		}
	}).catch((err) => {
		console.log(err);
		// clear user
    
		localStorage.removeItem('token');
    
		user.setUser(
			{
			}
		); 
		return false; 
	});
};

export const signout = (user:any) => {
	localStorage.removeItem('token');
	user.setUser({
	});
};