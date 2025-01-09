import UserList from "./UserList";
import useUsersData from "../hooks/useUsersData";

const UserContainer = () => {
  const { error, data, isLoading } = useUsersData();
  const props = {
    data,
    error,
    isLoading,
  };

  return <UserList {...props} />;
};

export default UserContainer;
