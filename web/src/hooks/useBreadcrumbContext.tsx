import React, { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IBreadcrumbItem {
  text: string;
  value: number;
}
interface IContext {
  items: IBreadcrumbItem[];
  addItem: (text: string) => void;
  navigateBack: (value: number) => void;
}

const Context = createContext<IContext>({
  items: [{ text: "home", value: 0 }],
  addItem: () => [],
  navigateBack: () => [],
});

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState<IBreadcrumbItem[]>([
    { text: "home", value: 0 },
    { text: "All Lists", value: 1 },
  ]);

  const addItem = useCallback(
    (text: string) => {
      const item: IBreadcrumbItem = { text, value: items.length };
      setItems((prevItems) => [...prevItems, item]);
    },
    [items.length]
  );

  const removeItem = useCallback((value: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.value <= value));
  }, []);

  const navigateBack = useCallback(
    (value: number) => {
      removeItem(value);
      navigate(-items.length + 1 + value);
    },
    [items.length, navigate, removeItem]
  );

  return (
    <Context.Provider value={{ items, addItem, navigateBack }}>
      {children}
    </Context.Provider>
  );
};

export const useBreadcrumbContext: () => IContext = () => {
  return useContext(Context);
};
