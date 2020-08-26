import React from 'react';

import { CategoryListProps } from '../types';
import { 
  Container,
  Image,
  Name,
  Status,
  RedCircles,
  Info,
 } from './styles';

const CategoryItem: React.FC<CategoryListProps> = ({ item }) => {
  return (
    <Container>
      <Image source={item.source} />
      <Name numberOfLines={1}>{item.name}</Name>
      <Status>
        <RedCircles />
        <Info>69.69k</Info>
      </Status>
    </Container>
  );
};

export default CategoryItem;
