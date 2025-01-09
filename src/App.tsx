import Select from "./components/Select";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Select value="option1">
        <Select.SelectOption value="option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="option3">Option 3</Select.SelectOption>
        <Select.SelectOption value="option4">Option 4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
