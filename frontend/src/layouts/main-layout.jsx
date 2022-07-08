import Navbar from "../components/navbar/navbar";

const MainLayout = ({children}) => {
  return (
    <div className=" min-h-screen w-screen flex ">
      <aside className="w-2/12 md:w-20">
        <Navbar />
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
