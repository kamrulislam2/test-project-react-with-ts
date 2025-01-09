type UserListProps = {
  isLoading: boolean;
  error: boolean;
  data: {
    id: number | string;
    name: string;
  }[];
};
const UserList = ({ isLoading, error, data }: UserListProps) => {
  if (isLoading && !error) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong!!!</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
