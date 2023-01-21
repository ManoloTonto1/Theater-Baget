import React from 'react';
import {
	Box, Grow, Typography 
} from '@mui/material';
import {
	Ticket 
} from '../../../components/Ticket';
import type {
	Reservering 
} from '../../../components/global/globalTypes';
import API from '../../../api/apiRoutes';
import type {
	userData 
} from '../../../context/UserContext';
import UserContext from '../../../context/UserContext';

import InfiniteScroll from 'react-infinite-scroller';
import LoadingPage from '../../../components/global/LoadingPage';
import Modal from '@mui/material/Modal';
import QRCode from 'react-qr-code';
function ProfielTickets() {
	const [data, setData] = React.useState<never[] | Reservering[]>([]);
	const [loadedData, setLoadedData] = React.useState<never[] | Reservering[]>([]);
	const [hasMore,setHasMore] =React.useState(true);
	const { user } = React.useContext(UserContext);
	const [isLoading, setLoading] = React.useState(true);
	const [open, setOpen] = React.useState(false);
	const [selectedTicket, setSelectedTicket] = React.useState('');
	const u = user.userData as userData;
	React.useEffect(() => {
		// needs to query tickets instead of programmering
		const query = async () => {
			await API('gebruikers').Get(u.id + '')
				.then((res) => {
					if (res.status != 200) {
						return;
					}
					setData(res.data.reserveringen);
					setLoadedData(res.data.reserveringen.slice(0, 5));
					setLoading(false);
				});
		};
		query();
	}, [u.id]);

	const loadMore = React.useCallback(async () => {
		if (loadedData.length >= data.length) {
			setHasMore(false);
		}
		setLoadedData(data.slice(0,loadedData.length+5));
	},[data, loadedData.length]);
	return (
		<>
			<Box sx={{
				overflow:'auto',
				scrollbarWidth: 'thin',
				height:400
			}}>
				<Typography variant='h4' mb={2}>
					Tickets
				</Typography>
				{isLoading ? <LoadingPage /> : (
					loadedData.length == 0 ? 
						(
							<Typography variant='h5' mb={2}>
									U heeft geen Tikets gekocht.
							</Typography>
						)
						:
						(
							<InfiniteScroll
								pageStart={0}
								loadMore={loadMore}
								hasMore={hasMore}
								loader={<div className="loader" key={0}>Even Geduld ...</div>}
								useWindow={false}
							>
								{loadedData.map((card) => {
									return (
										<Ticket key={card.id}
											disableLink
											{...card.programmering}
											onClick={async (e) => {
												e.preventDefault();
												e.stopPropagation();
												setSelectedTicket(card.QR);
												setOpen(true);
											}} />
									);
								})}
							</InfiniteScroll>
									
						)
				)
				}

			</Box>
			<Modal

				open={open}
				onClose={async() => {
					setOpen(false);
					setTimeout(async () => {
						setSelectedTicket('');
					},300);
				}}
			>
				<Grow in={open}>
	
					<Box
						sx={{
							position: 'absolute' as const,
							top: '30%',
							left: '35%',
							transform: 'translate(-50%, -50%)',
							width: 400,
							bgcolor: 'background.paper',
							boxShadow: 24,
							p: 4,
						}}>
						<QRCode
							size={256}
							style={{
								width: '100%',
							}}
							value={selectedTicket}
							viewBox={'0 0 256 256'}
						/>
					</Box>	
				</Grow>
		
			</Modal>
		</>

	);
}

export default ProfielTickets;