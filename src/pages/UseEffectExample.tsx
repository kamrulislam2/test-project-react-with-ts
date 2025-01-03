import { useEffect } from "react";

const UseEffectExample = () => {
  //   const [hidden, setHidden] = useState(false);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      //   setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">Use Effect Example</h1>

      {/* <button
        onClick={() => setHidden((prev) => !prev)}
        className="px-5 py-3 bg-blue-600 text-2xl text-white font-semibold rounded my-3"
      >
        Click for Change
      </button> */}

      {/* <h2 className="font-bold text-3xl">{count}</h2> */}

      <Todo />
    </div>
  );
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return <div className="border border-blue-500">Todo</div>;
};
export default UseEffectExample;
