type WithBorderProps = {
  WrappedComponent: any;
  props: any;
};
const WithBorder = (WrappedComponent: WithBorderProps) => {
  return (props: WithBorderProps) => (
    <div className="border-2 border-red-500 p-4 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;
