import React from 'react';

import { List } from './styles';
import ChannelItem from './ChannelItem';

const ChannelList: React.FC = () => {
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
