import {
	Box,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Grow,
	ThemeProvider,
} from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
	Container 
} from '@mui/system';
import React from 'react';
import UserContext from '../../context/UserContext';
import {
	useNavigate 
} from 'react-router-dom';
import {
	ActionButtons 
} from './ActionButtons';
import WelcomeTextAndVideo from './WelcomeTextAndVideo';
import API from '../../api/apiRoutes';
import type {
	Programma 
} from '../../components/global/globalTypes';
import LoadingPage from '../../components/global/LoadingPage';
import InfiniteScroll from 'react-infinite-scroller';

function Homepage(): JSX.Element {
	const [data, setData] = React.useState<never[] | Programma[]>([]);
	const [loadedData, setLoadedData] = React.useState<never[] | Programma[]>([]);
	const [hasMore, setHasMore] = React.useState(true);
	React.useEffect(() => {
		API('programmeringen')
			.GetAll()
			.then((res) => {
				setData(res.data);
				setLoadedData(res.data.slice(0, 4));
			});
	}, []);
	const { theme } = React.useContext(UserContext);
	const navigate = useNavigate();

	const loadMore = React.useCallback(async () => {
		if (loadedData.length >= data.length) {
			setHasMore(false);
		}
		setLoadedData(data.slice(0, loadedData.length + 4));
	}, [data, loadedData.length]);
	return (
		<ThemeProvider theme={theme.theme}>
			<Container maxWidth="xl">
				<WelcomeTextAndVideo />

				<ActionButtons />

				<Typography
					component={'h2'}
					sx={{
						mb: 4,
					}}
					textAlign={'left'}
					variant="h3"
				>
          Huidige activiteiten:
				</Typography>

				{data.length != 0 ? (
					<Box
						sx={{
							overflow: 'auto',
							mb: 4,
						}}
					>
						<InfiniteScroll
							element={Grid}
							container
							spacing={3}
							pageStart={0}
							loadMore={loadMore}
							hasMore={hasMore}
							loader={
								<div className="loader" key={0}></div>
							}
							// eslint-disable-next-line max-len
						>
							{loadedData.map((card, index) => {
								const datum = new Date(card.datum);
								const newDate = datum.toString().split(' ');
								return (
									<Grow in timeout={index * 100}
										key={card.id}>
										<Grid item xs={12}
											md={6} sm={6}
											lg={3}>
											<Card elevation={10}>
												<CardActionArea
													LinkComponent={'a'}
													href={`#/event/${card.id}`}
													onClick={(e): void => {
														e.preventDefault();
														e.stopPropagation();
														navigate(`event/${card.id}`);
													}}
												>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'center',
														}}
													>
														<CardMedia
															component="img"
															height={300}
															sx={{
																minWidth: '50%',
																maxWidth: 500,
															}}
															image={card.afbeelding}
															alt={`afbeelding van het event "${card.titel}"`}
														/>
													</Box>

													<CardContent>
														<Typography
															gutterBottom
															variant="h5"
															component="p"
														>
															{card.titel}
														</Typography>
														<Typography variant="body2" color="text.secondary">
															{newDate[1]} {newDate[2]}, {newDate[3]}
														</Typography>
														<Typography variant="body2" color="text.secondary">
															{card.omschrijving}
														</Typography>
													</CardContent>
												</CardActionArea>
											</Card>
										</Grid>
									</Grow>
								);
							})}
						</InfiniteScroll>
					</Box>
				) : (
					<LoadingPage />
				)}
			</Container>
		</ThemeProvider>
	);
}

export default Homepage;
