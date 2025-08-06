import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h1>This is Admin Layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
