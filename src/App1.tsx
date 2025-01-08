import { useContext } from "react";
// import UseRefExample2 from "./pages/UseRefExample2";
import { ThemeContext, TThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  return (
    <>
      <div
        className={`h-screen w-full flex justify-center items-center ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        <button
          onClick={() => setDark(!dark)}
          className="px-5 py-3 block bg-pink-600 text-2xl text-white font-semibold rounded my-3"
        >
          Toggle
        </button>
        <MenuList>
          <MenuItem />
        </MenuList>
      </div>
    </>
  );
}

export default App;
