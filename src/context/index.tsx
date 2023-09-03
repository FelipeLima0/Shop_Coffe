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
  quantity: number;
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
  remove(id: string): void;
  listAll: CoffeContext[];
  menu: Coffe[];
  totalCoffes: number;
  total: number;
}

export const CoffesContext = createContext<ContextProps>({
  add: () => {},
  removeQuantity: () => {},
  remove: () => {},
  listAll: [],
  menu: [],
  totalCoffes: 0,
  total: 3.5,
});

export const CoffesProvider = ({ children }: CoffesProviderProps) => {
  const [coffes, setCoffes] = useState<CoffeContext[]>([]);
  const [menu, setMenu] = useState<Coffe[]>(coffesList as Coffe[]);

  function add(id: string) {
    const coffeInMenu = menu.find((item) => item.id === id);

    const coffeIndex = coffes.findIndex((item) => item.id === id);

    if (coffeIndex >= 0) {
      coffes[coffeIndex].quantity = coffes[coffeIndex].quantity + 1;
      setCoffes([...coffes]);

      coffeInMenu.quantity++;
      setMenu([...menu]);

      return;
    }

    setCoffes([
      ...coffes,
      {
        ...coffeInMenu,
        quantity: 1,
      },
    ]);

    coffeInMenu.quantity++;
    setMenu([...menu]);
  }

  function removeQuantity(id: string) {
    const coffeIndex = coffes.findIndex((item) => item.id === id);
    const coffeInMenu = menu.find((item) => item.id === id);

    if (coffeIndex < 0) return;

    const coffeQuantity = coffes[coffeIndex].quantity;

    if (coffeQuantity > 1) {
      coffes[coffeIndex].quantity = coffes[coffeIndex].quantity - 1;
      setCoffes([...coffes]);

      coffeInMenu.quantity--;
      setMenu([...menu]);

      return;
    }

    remove(id);
  }

  function remove(id: string) {
    setCoffes((coffes) => {
      const coffe = coffes.filter((item) => item.id !== id);

      return coffe;
    });

    setMenu((coffes) => {
      const coffe = coffes.find((item) => item.id === id);
      coffe.quantity = 0;
      return [...coffes, coffe];
    });
  }

  const totalCoffes = coffes.reduce((acc, curr) => {
    const coffePrice = curr.valueCoffe * curr.quantity;

    const total = acc + coffePrice;
    return parseFloat(total.toFixed(4));
  }, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const a = totalCoffes + 3.5;

  const total: any = formatter.format(a);


  return (
    <CoffesContext.Provider
      value={{
        remove,
        add,
        removeQuantity,
        menu,
        totalCoffes,
        total,
        listAll: coffes,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
};

// react-number-format
// Array.from({ length: 3 }).map((_, index) => {}
