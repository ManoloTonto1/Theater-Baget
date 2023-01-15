import API from '../api/apiRoutes';

export const validate = async (user:any) => {
    let result = false;

	API('validate').Create(
		{
			token: localStorage.getItem('token'),
		}
	).then((res) => {
		if(res.status == 200) {
			result = true;
		}
	}).catch(() => {
        
		// clear user
    
		localStorage.removeItem('token');
    
		user.setUser(
			{
			}
		); 
		result = false; 
	});

    return result;
};