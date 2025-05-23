
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-solid p-10 m-10">
        This is the Topher Layout
      {children}
    </div>
  );
}

export default Layout;