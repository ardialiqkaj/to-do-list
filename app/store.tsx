import create from "zustand";

// Standard interface and functions
export interface Item {
  id: number;
  text: string;
  done: boolean;
}

const updateItem = (items: Item[], id: number, text: string): Item[] =>
  items.map((item) => ({
    ...item,
    text: item.id === id ? text : item.text,
  }));

const toggleItem = (items: Item[], id: number): Item[] =>
  items.map((item) => ({
    ...item,
    done: item.id === id ? !item.done : item.done,
  }));

const removeItem = (items: Item[], id: number): Item[] =>
  items.filter((item) => item.id !== id);

const addItem = (items: Item[], text: string): Item[] => [
  ...items,
  {
    id: Math.max(0, Math.max(...items.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Zustand implementation
type Store = {
  items: Item[];
  newItem: string;
  setItems: (items: Item[]) => void;
  addItem: () => void;
  updateItem: (id: number, text: string) => void;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
  setNewItem: (newItem: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    items: [],
    newItem: "",
    setItems: (items: Item[]) =>
      set((state) => ({
        ...state,
        items,
      })),
    removeItem: (id: number) =>
      set((state) => ({
        ...state,
        items: removeItem(state.items, id),
      })),
    updateItem: (id: number, text: string) =>
      set((state) => ({
        ...state,
        items: updateItem(state.items, id, text),
      })),
    toggleItem: (id: number) =>
      set((state) => ({
        ...state,
        items: toggleItem(state.items, id),
      })),
    setNewItem: (newItem: string) =>
      set((state) => ({
        ...state,
        newItem,
      })),
    addItem: () =>
      set((state) => ({
        ...state,
        items: addItem(state.items, state.newItem),
        newItem: "",
      })),
  })
);

export default useStore;