import { useRef, useState } from "react";

const UseRefExample = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(myRef.current);
    console.log("Ref =>", myRef.current);
  };
  return (
    <div>
      <h1>Use Ref Example</h1>
      <button
        onClick={() => increment()}
        className="px-5 py-3 bg-blue-600 text-2xl text-white font-semibold rounded my-3"
      >
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExample;
