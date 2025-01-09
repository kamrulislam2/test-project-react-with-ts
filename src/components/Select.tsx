import React, { createContext, useContext, useState } from "react";

interface SelectContextType {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}
type SelectProps = {
  value: string;
  children: React.ReactNode;
};
const SelectContext = createContext<SelectContextType | null>(null);

const Select = ({ children }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);
  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }: SelectProps) => {
  const { selectedOption } = useSelectContext();
  const isActive = selectedOption === value;
  return (
    <option
      className={`${isActive ? "bg-purple-400" : "bg-white"}`}
      value={value}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("Context out of bound");
  } else {
    return context;
  }
};
