const Nav = ({ children }) => {
  let classes =
    "bg-gray-800 text-white p-4 flex flex-col dark:bg-gray-50 dark:text-black sticky top-0";

  classes += " sm:flex-row sm:items-center sm:justify-between";
  classes += " md:flex-col md:w-64 md:h-screen";
  classes += " lg:w-80";
  return (
    <div className={classes}>
      <div className="mb-8 sm:hidden md:block">
        <h1 className="text-xl font-bold">My Application</h1>
      </div>
      {children}
    </div>
  );
};

export default Nav;
