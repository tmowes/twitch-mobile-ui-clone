import React from 'react';

import {
  Container,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelItem: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Avatar />
        <Column>
          <UserName>Julius_mowes</UserName>
          <Info>69 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </Container>
  );
};

export default ChannelItem;
