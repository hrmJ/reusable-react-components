import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { ShoppingListItemType } from "../models";

interface AddItemProps {
  onSave: (item: ShoppingListItemType) => void;
}

export const AddItem = ({ onSave }: AddItemProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const parsedValue = parseInt(e.target.value);

    if (isNaN(parsedValue)) return;

    setAmount(parsedValue);
  };

  const handleClear = (): void => {
    setAmount(0);
    setName("");
  };

  const handleOnSave = (): void => {
    const newItem: ShoppingListItemType = {
      name: name,
      amount: amount,
      id: uuidv4(),
    };

    handleClear();
    onSave(newItem);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={amount}
        placeholder="Amount"
        type="number"
        onChange={(e) => handleAmountChange(e)}
      />
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleOnSave}>
          Add
        </Button>
        <Button variant="outlined" onClick={handleClear}>
          Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default AddItem;
