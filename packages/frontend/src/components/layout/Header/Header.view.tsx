import React from 'react';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
	return <header>JUST AN HEADER</header>;
};

HeaderView.displayName = 'HeaderOneView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
