import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';

import { ShoppingListItemType } from "../models";

interface ShoppingListItemProps {
  item: ShoppingListItemType;
  onDelete: (item: ShoppingListItemType) => void;
}

export const ShoppingListItem = ({ item, onDelete }: ShoppingListItemProps) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText primary={item.name} secondary={item.amount} />
        <ListItemIcon onClick={() => onDelete(item)}>
          <DeleteIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default ShoppingListItem;
