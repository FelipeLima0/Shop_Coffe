import { createContext, useState } from "react";
import { coffesList } from "./coffes";

interface CoffesProviderProps {
  children: React.ReactNode;
}

export interface Coffe {
  id: string;
  image: string;
  title: string;
  tag: string[];
  info: string;
  valueCoffe: number;
}

export interface CoffeContext {
  id: string;
  image: string;
  title: string;
  tag: string[];
  info: string;
  valueCoffe: number;
  quantity: number;
}

interface ContextProps {
  add(id: string): void;
  removeQuantity(id: string): void;
  listAll: Coffe[];
  menu: Coffe[];
  totalCoffes: number;
  total: number;
}

export const CoffesContext = createContext<ContextProps>({
  add: () => {},
  removeQuantity: () => {},
  listAll: [],
  menu: [],
  totalCoffes: 0,
  total: 3.5,
});

export const CoffesProvider = ({ children }: CoffesProviderProps) => {
  const [coffes, setCoffes] = useState<CoffeContext[]>([]);
  const menu = coffesList as Coffe[];

  console.log("cart", JSON.stringify(coffes, null, 2));
  console.log("cart total items", coffes.length);

  function add(id: string) {
    const coffeInMenu = menu.find((item) => item.id === id);

    const coffeIndex = coffes.findIndex((item) => item.id === id);

    if (coffeIndex >= 0) {
      coffes[coffeIndex].quantity = coffes[coffeIndex].quantity + 1;
      setCoffes([...coffes]);

      return;
    }

    setCoffes([
      ...coffes,
      {
        ...coffeInMenu,
        quantity: 1,
      },
    ]);
  }

  function removeQuantity(id: string) {
    const coffeIndex = coffes.findIndex((item) => item.id === id);

    if (coffeIndex < 0) return [];

    const coffeQuantity = coffes[coffeIndex].quantity;

    if (coffeQuantity > 1) {
      coffes[coffeIndex].quantity = coffes[coffeIndex].quantity - 1;
      setCoffes([...coffes]);
      return;
    }

    remove(id);
  }

  function remove(id: string) {
    setCoffes((coffes) => {
      const coffe = coffes.filter((item) => item.id !== id);

      return coffe;
    });
  }

  // function listAll(){
  //   return coffes
  // }

  const totalCoffes = coffes.reduce((acc, curr) => {
    const coffePrice = curr.valueCoffe * curr.quantity;

    const total = acc + coffePrice;
    return parseFloat(total.toFixed(4));
  }, 0);

  const total = parseFloat(totalCoffes + (3.5).toFixed(4));

  console.log("aqui o valor do cafe", totalCoffes);

  return (
    <CoffesContext.Provider
      value={{ add, removeQuantity, menu, totalCoffes, total, listAll: coffes }}
    >
      {children}
    </CoffesContext.Provider>
  );
};
