import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { ShoppingList } from "./components/ShoppingList";

function App() {
  const [open, setOpen] = React.useState(false);

  const activeUser = "user";

  const onSave = (shoppingList) => {
    console.log("Saving: ", shoppingList);
    setOpen(false);
  };
  const onCancel = () => {
    console.log("onCancel");
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ShoppingList
            activeUser={activeUser}
            onSave={onSave}
            onCancel={onCancel}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default App;
