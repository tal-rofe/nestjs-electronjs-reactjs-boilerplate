import React from 'react';

import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<Header />
			<Footer />
		</React.Fragment>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
