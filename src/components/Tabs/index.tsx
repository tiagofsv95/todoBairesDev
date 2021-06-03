import React from 'react';
import { TabContainer, TabList, TabListItem, TabNavLink } from './styles';

const Tabs: React.FC = () => {
  return (
    <TabContainer>
      <TabList>
        <TabListItem>
          <TabNavLink to="/">Todo</TabNavLink>
        </TabListItem>
        <TabListItem>
          <TabNavLink to="/done">Done</TabNavLink>
        </TabListItem>
      </TabList>
    </TabContainer>
  );
};

export default Tabs;
