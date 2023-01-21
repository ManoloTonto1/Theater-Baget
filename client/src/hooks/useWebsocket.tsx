import * as signalR from '@microsoft/signalr';
import React from 'react';
import {
	useLocation 
} from 'react-router-dom';
const apiEndPoint = import.meta.env.MODE === 'development' ?
	'/ws/stoelen'
	: 'https://theater-baget-t24oktgp5q-ew.a.run.app/api/stoelen';

const connection = new signalR.HubConnectionBuilder()
	.withUrl(apiEndPoint)
	.build();

function useWebsocket(
	currentId: number,
	prevSeats: string[]
): [signalR.HubConnection, (location: string) => void] {
	const location = useLocation();
	window.onbeforeunload = () => {
		unsubscribe(location.pathname);
		unsubscribe(location.hash);
	};
	window.addEventListener('beforeunload', (e) => {
		unsubscribe(location.pathname);
		unsubscribe(location.hash);
	});
	
	const unsubscribe = React.useCallback(
		(location: string) => {
			if (location.includes('bestellen')) {
				return;
			}
			connection.invoke('UnsubscribeNoBuy', currentId, [], prevSeats);
		},
		[currentId, prevSeats]
	);

	React.useEffect(() => {
		if (!location.pathname.includes('bestellen')) {
			connection.state === signalR.HubConnectionState.Connected
				? connection.invoke('UnsubscribeNoBuy', currentId, [], prevSeats)
				: null;
			return;
		}
		connection.start().catch((err) => console.error(err.toString()));
	}, [currentId, location.hash, location.pathname, prevSeats]);

	return [connection, unsubscribe];
}

export default useWebsocket;
