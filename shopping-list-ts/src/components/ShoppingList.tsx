import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import AddItem from "./AddItem";
import ShoppingListList from "./ShoppingListList";
import { ShoppingListItemType, ShoppingListType } from "../models";

interface ShoppingListProps {
  activeUser: string;
  onSave: (shoppingList: ShoppingListType) => void;
  onCancel: () => void;
}

export const ShoppingList = ({
  activeUser,
  onSave,
  onCancel,
}: ShoppingListProps): JSX.Element => {
  const [name, setName] = useState("");
  const [items, setItems] = useState<ShoppingListItemType[]>([]);

  const addItem = (item: ShoppingListItemType): void => {
    setItems([...items, item]);
  };

  const removeItem = (item: ShoppingListItemType): void => {
    const newItems = items.filter(
      (existingItem) => item.id !== existingItem.id
    );
    setItems(newItems);
  };

  const handleOnSave = (): void => {
    const toBeSaved: ShoppingListType = {
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

export default ShoppingList;
