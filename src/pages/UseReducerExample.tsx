import React, { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    // <div>
    //   <h1 className="text-6xl text-center font-bold">{state.count}</h1>
    //   <div className="flex gap-5 items-center mt-6">
    //     <button
    //       onClick={() => dispatch({ type: "increment" })}
    //       className="px-5 py-3 bg-green-600 text-2xl text-white font-semibold rounded"
    //     >
    //       Increment
    //     </button>
    //     <button
    //       onClick={() => dispatch({ type: "incrementBySetAmount", payload: 3 })}
    //       className="px-5 py-3 bg-green-600 text-2xl text-white font-semibold rounded"
    //     >
    //       Increment by 3
    //     </button>
    //     <button
    //       onClick={() => dispatch({ type: "decrement" })}
    //       className="px-5 py-3 bg-red-600 text-2xl text-white font-semibold rounded"
    //     >
    //       Decrement
    //     </button>
    //   </div>
    // </div>
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        type="text"
        name="email"
        id="email"
        className="border"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducerExample;
