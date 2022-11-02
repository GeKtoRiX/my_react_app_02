import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
const MainLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default MainLayout;
