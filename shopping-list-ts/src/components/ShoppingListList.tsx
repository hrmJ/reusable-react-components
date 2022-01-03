import React from "react";
import List from '@mui/material/List';

import { ShoppingListItemType } from "../models";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListListProps {
  items: ShoppingListItemType[];
  onDelete: (item: ShoppingListItemType) => void;
}

export const ShoppingListList = ({items, onDelete}: ShoppingListListProps) => {
  return (
    <List>
      {items.map((item, index) => <ShoppingListItem onDelete={onDelete} key={`${item.name}_${index}`} item={item}/>)}
    </List>
  )
};

export default ShoppingListList;
