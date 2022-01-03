import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";

export const ShoppingListItem = ({ item, onDelete }) => {
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

ShoppingListItem.propTypes = {
  item: PropTypes.shape({ name: PropTypes.string.isRequired, amount: PropTypes.number.isRequired }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingListItem;
