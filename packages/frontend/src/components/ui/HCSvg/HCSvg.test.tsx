import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HCSvg from './HCSvg';

configure({ adapter: new Adapter() });

describe('<HCSvg>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<HCSvg></HCSvg>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
