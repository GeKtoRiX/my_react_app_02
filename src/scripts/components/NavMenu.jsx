import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav>
        <NavLink to={"/Home"}>Home</NavLink>
        <NavLink to={"/Courses"}>Courses</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contacts"}>Contacts</NavLink>
      </nav>
    </>
  );
};

export default NavMenu;
