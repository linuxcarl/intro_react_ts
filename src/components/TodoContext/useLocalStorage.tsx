import React from "react";
import { Todo } from "../../interfaces/Todo.interface";

function useLocalStorage(itemName: string, initialValue: Array<Todo>) {
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [item, setItem] = React.useState<Todo[]>(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(`${error}`);
      }
    }, 3000);
  });

  const saveItem = (newItem: Todo[]) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(`${error}`);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
export { useLocalStorage };
