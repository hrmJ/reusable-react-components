import { Button } from "@mui/material";
import React, { useState } from "react";

export interface ShoppingListItem {
  name: string;
  quantity: number;
}

interface ShoppingListProps {
  activeUser: string;
  items: ShoppingListItem[];
  onSave?: (items: ShoppingListItem[]) => Promise<void>;
}

export const ShoppingList = ({
  activeUser,
  items,
  onSave,
}: ShoppingListProps) => {
  const [internalItems, setInternalItems] = useState(items);

  const onSaveHandler = () => {
    if (onSave) {
      onSave(internalItems);
    }
  };

  const decreaseQuantity = (item: ShoppingListItem) => {
    console.log("ennen muutosta", internalItems);
    const updatedItems = internalItems.map((_item) =>
      _item.name !== item.name
        ? _item
        : {
            ..._item,
            quantity: _item.quantity - 1,
          }
    );
    console.log(updatedItems);
    setInternalItems(updatedItems);
  };

  return (
    <div>
      <div>{activeUser}</div>
      <div>
        <Button onClick={onSaveHandler}>Save</Button>
      </div>
      <ul>
        {internalItems.map((item) => (
          <li key={item.name}>
            {item.quantity}x {item.name} <Button>+</Button>
            <Button onClick={() => decreaseQuantity(item)}>-</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
