import * as signalR from '@microsoft/signalr';
import React from 'react';
import {
	useLocation 
} from 'react-router-dom';
const connection = new signalR.HubConnectionBuilder()
	.withUrl('/ws/stoelen')
	.build();
function useWebsocket(currentId: number, prevSeats: string[]): [signalR.HubConnection, (location:string) => void] {
	const location = useLocation();
	const unsubscribe = React.useCallback((location: string) => {
		
		if (location.includes('bestellen')) {
			return;
		}
		connection.invoke('UnsubscribeNoBuy', currentId, [], prevSeats);
	}, [currentId, prevSeats]);
    
	React.useEffect(() => {
 		if (!location.pathname.includes('bestellen')) {
			connection.state === signalR.HubConnectionState.Connected ?
				connection.invoke('UnsubscribeNoBuy', currentId, [], prevSeats) :
				null;
			return;
		} 
		connection.start().catch(err => console.error(err.toString()));
	}, [currentId, location.hash, location.pathname, prevSeats]);
    
	return [connection,unsubscribe];
}

export default useWebsocket;