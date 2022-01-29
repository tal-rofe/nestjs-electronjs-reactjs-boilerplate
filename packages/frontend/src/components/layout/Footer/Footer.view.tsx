import React from 'react';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return <footer className={classes['footer']}>JUST A FOOTER</footer>;
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
