import { useEffect, useState } from "react";

const obj1 = { name: "Kamrul", email: "kamrul@test.com" };
const obj2 = { name: "Kamrul", email: "kamrul@test.com" };

console.log(obj1 === obj2);
const UseEffectExample = () => {
  // const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     //   setCount((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, []);
  return (
    <div>
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-red-500"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
        id="email"
        className="border border-red-500"
      />
    </div>
  );
  // return (
  //   <div className="text-center">
  //     <h1 className="font-bold text-xl">Use Effect Example</h1>

  //     {/* <button
  //       onClick={() => setHidden((prev) => !prev)}
  //       className="px-5 py-3 bg-blue-600 text-2xl text-white font-semibold rounded my-3"
  //     >
  //       Click for Change
  //     </button> */}

  //     {/* <h2 className="font-bold text-3xl">{count}</h2> */}
  //     <button
  //       onClick={() => setHidden((prev) => !prev)}
  //       className="px-5 py-3 bg-green-600 text-2xl text-white font-semibold rounded"
  //     >
  //       Show
  //     </button>

  //     {!hidden && <Todo />}
  //   </div>
  // );
};

// const Todo = () => {
//   const controller = new AbortController();
//   const signal = controller.signal;
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
//       .then((res) => res.json())
//       .then((data) => alert(data.title));

//     return () => {
//       controller.abort();
//     };
//   }, []);
//   return <div className="border border-blue-500">Todo</div>;
// };
export default UseEffectExample;
