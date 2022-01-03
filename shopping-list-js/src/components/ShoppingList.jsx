import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import PropTypes from 'prop-types';

import AddItem from "./AddItem";
import ShoppingListList from "./ShoppingListList";

export const ShoppingList = ({
  activeUser,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    const newItems = items.filter(
      (existingItem) => item.id !== existingItem.id
    );
    setItems(newItems);
  };

  const handleOnSave = () => {
    const toBeSaved = {
      createdBy: activeUser,
      name: name,
      items: items,
    };

    onSave(toBeSaved);
    onCancel();
  };

  return (
    <>
      <h1>Shopping list</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="List name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Divider style={{ marginTop: "10px" }} />
      <h2 style={{ marginBottom: "10px" }}>Add new item</h2>
      <AddItem onSave={addItem} />
      <Divider style={{ marginTop: "10px" }} />
      {items.length > 0 ? (
        <>
          <h2 style={{ marginBottom: "10px" }}>Items</h2>
          <Box component="form" noValidate autoComplete="off">
            <ShoppingListList items={items} onDelete={removeItem} />
          </Box>
        </>
      ) : (
        <p>No items</p>
      )}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleOnSave}>
            Save
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </>
  );
};

ShoppingList.propTypes = {
  activeUser: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ShoppingList;
