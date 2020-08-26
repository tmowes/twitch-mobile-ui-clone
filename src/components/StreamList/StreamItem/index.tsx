import React from 'react';
import streamThumbnail from '../../../images/stream_thumbnail.jpg';

import {
  Container,
  Thumbnail,
  Column,
  Row,
  Header,
  Avatar,
  UserName,
  Description,
  Category,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamItem: React.FC = () => {
  return (
    <Container>
      <Thumbnail source={streamThumbnail} />
      <Column>
        <Row>
          <Header>
            <Avatar />
            <UserName numberOfLines={1}>julius_mowes</UserName>
          </Header>
          <Description numberOfLines={1}>Live Coders BR</Description>
          <Category numberOfLines={1}>Live Coders</Category>
        </Row>
        <TagRow>
          <TagView>
            <TagText> Science </TagText>
          </TagView>
          <TagView>
            <TagText> Coders </TagText>
          </TagView>
        </TagRow>
      </Column>
    </Container>
  );
};

export default StreamItem;
