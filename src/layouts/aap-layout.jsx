import { Outlet } from "react-router-dom"


const AppLayout = () => {
  return (
    <div className="bg-green-950">
      {/* header */ }
     <main>
      <Outlet />
     </main>
    </div>
  );
};

export default AppLayout;
