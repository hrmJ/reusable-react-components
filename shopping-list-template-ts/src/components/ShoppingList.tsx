import React from "react";

interface ShoppingListProps {
  activeUser: string;
}

export const ShoppingList = ({ activeUser }: ShoppingListProps) => {
  return <div>{activeUser}</div>;
};

export default ShoppingList;
