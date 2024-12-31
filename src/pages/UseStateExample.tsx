import React from "react";

type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold">{counter}</h1>
      <div className="flex gap-5 items-center mt-6">
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-5 py-3 bg-green-600 text-2xl text-white font-semibold rounded"
        >
          Increment
        </button>
        {/* <button
            onClick={() => setCounter(counter - 1)}
            className="px-5 py-3 bg-red-600 text-2xl text-white font-semibold rounded"
          >
            Async Increment
          </button>
          <button
            onClick={() => setCounter(0)}
            className="px-5 py-3 bg-gradient-to-r from-green-600 to-red-600 text-2xl text-white font-semibold rounded"
          >
            Reset
          </button> */}
      </div>
    </div>
  );
};

export default UseStateExample;
