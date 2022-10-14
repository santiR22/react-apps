import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export const Store = ({ children }) => {
  const [items, setItems] = useState([]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === id);
    const temp = [...items];

    temp[index] = { ...item };
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    return useContext(AppContext)
}