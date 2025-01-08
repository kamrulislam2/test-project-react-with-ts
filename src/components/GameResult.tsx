import UseText from "./UseText";
import WithBorder from "./WithBorder";

const UserWithBorder = WithBorder(UseText);
const GameResult = () => {
  return (
    <div className="flex gap-10 items-center">
      <UseText text={"Hello Use Text File"} />
      <UserWithBorder text={"Hello Use Text File"} />
      <UseText text={"Hello Use Text File"} />
      <UseText text={"Hello Use Text File"} />
    </div>
  );
};

export default GameResult;
