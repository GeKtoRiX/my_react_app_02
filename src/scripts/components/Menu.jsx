import { NavLink } from "react-router-dom";

const Menu = () => {
  // Для доступа к компонентам сайта используются абсолютные(зависимые от корневых имен) ссылки.
  return (
    <nav>
      {/* Ссылка(адрес) на главный компонент(страницу) */}
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underLine" } : {}
        }
        to={"/"}
      >
        Home
      </NavLink>
      {/* Ссылка(адрес) на компонент(страницу) About */}
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "overline" } : {}
        }
        to={"/About"}
      >
        About
      </NavLink>
      {/* Ссылка(адрес) на компонент(страницу) Contacts */}
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underLine" } : {}
        }
        to={"/Contacts"}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
