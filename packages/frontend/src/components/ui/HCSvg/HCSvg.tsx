import React, { CSSProperties } from 'react';

import icons from '../../../assets/icons';

import HCSvgView from './HCSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const HCSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HCSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick}>
			{props.children}
		</HCSvgView>
	);
};

HCSvg.displayName = 'HCSvg';
HCSvg.defaultProps = {};

export default React.memo(HCSvg);
