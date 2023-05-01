import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>This wrapped with layout admin ges</div>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
