const Box = ({ children }) => {
  return (
    <div className="border-2 border-solid p-10 m-10 border-gray-700 dark:border-gray-100">
      {children}
    </div>
  );
};

export default Box;
