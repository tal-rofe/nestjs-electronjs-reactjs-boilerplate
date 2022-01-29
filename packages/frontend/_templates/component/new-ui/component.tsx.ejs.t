---
to: src/components/ui/HC<%= h.changeCase.pascalCase(name.toLowerCase()) %>/HC<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import HC<%= h.changeCase.pascalCase(name) %>View from './HC<%= h.changeCase.pascalCase(name) %>.view';

interface IProps {}

const HC<%= h.changeCase.pascalCase(name) %>: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <HC<%= h.changeCase.pascalCase(name) %>View>{props.children}</HC<%= h.changeCase.pascalCase(name) %>View>;
};

HC<%= h.changeCase.pascalCase(name) %>.displayName = 'HC<%= h.changeCase.pascalCase(name) %>';
HC<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(HC<%= h.changeCase.pascalCase(name) %>);
