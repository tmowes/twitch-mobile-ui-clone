import React from 'react';

import { List } from './styles';
import data from './CategoryItem/data';
import CategoryItem from './CategoryItem';

const CategoryList: React.FC = () => {
  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
