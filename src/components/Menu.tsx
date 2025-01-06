/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from "react";

export type TMenuContext = {
  theme: string;
};
const MenuContext = createContext<TMenuContext | null>(null);
import { ReactNode } from "react";

export const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};

const { theme } = useContext(MenuContext);
export const MenuItem = () => {
  return <div>Menu Item with theme: {theme}</div>;
};
