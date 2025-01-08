interface UseTextProps {
  text: string;
}

const UseText = ({ text }: UseTextProps) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{text}</h1>
    </div>
  );
};

export default UseText;
