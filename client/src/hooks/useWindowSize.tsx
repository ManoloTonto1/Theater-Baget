import React from 'react';
type WindowSize = {
    innerWidth: number;
    innerHeight: number;
}
function getWindowSize():WindowSize {
	const { innerWidth, innerHeight } = window;
	return {
		innerWidth, innerHeight
	};
}
function useWindowSize():WindowSize {
	const [windowSize, setWindowSize] = React.useState(getWindowSize());

	React.useEffect(() => {
		const handleWindowResize = async (): Promise<void> => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	return windowSize;
}

export default useWindowSize;