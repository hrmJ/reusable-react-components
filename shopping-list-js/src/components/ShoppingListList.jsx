import React from "react";
import PropTypes from 'prop-types';
import List from '@mui/material/List';

import ShoppingListItem from "./ShoppingListItem";

export const ShoppingListList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item, index) => <ShoppingListItem onDelete={onDelete} key={`${item.name}_${index}`} item={item}/>)}
    </List>
  )
};

ShoppingListList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired, amount: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingListList;
