import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   console.log(myRef.current.value);
  // };
  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">Use Ref Example</h1>
      <div className="flex flex-row gap-6 my-2">
        <form>
          {/* onSubmit={handleSubmit} */}
          <CustomInput ref={myRef} className="border p-2 border-red-500" />
          <button
            type="submit"
            className="px-5 py-3 block bg-pink-600 text-2xl text-white font-semibold rounded my-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseRefExample;
