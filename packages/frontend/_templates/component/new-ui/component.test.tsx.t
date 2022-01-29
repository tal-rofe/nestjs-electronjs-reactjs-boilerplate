---
to: src/components/ui/HC<%= h.changeCase.pascalCase(name.toLowerCase()) %>/HC<%= h.changeCase.pascalCase(name.toLowerCase()) %>.test.tsx
---
<% name = name.toLowerCase() %>import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HC<%= h.changeCase.pascalCase(name) %> from './HC<%= h.changeCase.pascalCase(name) %>';

configure({ adapter: new Adapter() });

describe('<HC<%= h.changeCase.pascalCase(name) %>>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<HC<%= h.changeCase.pascalCase(name) %>></HC<%= h.changeCase.pascalCase(name) %>>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
