export const buildRequestParams = (data:object) => {

	let params = '';
	let count = 0;

	for (const [key, value] of Object.entries(data)) {
		if(count > 0) { 
			params += '&';
		}

		params += `${key}=${value}`;
		count++;
	}

	return params;
};