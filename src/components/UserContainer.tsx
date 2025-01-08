import { useEffect, useState } from "react";
import UserList from "./UserList";

const UserContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const props = {
    data,
    error,
    isLoading,
  };

  return <UserList {...props} />;
};

export default UserContainer;
