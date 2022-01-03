export interface ShoppingListType {
  name: string;
  createdBy?: string;
  items: ShoppingListItemType[];
}

export interface ShoppingListItemType {
  name: string;
  id: string;
  amount: number;
}
