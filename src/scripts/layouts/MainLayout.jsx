import { Outlet } from "react-router";
import Menu from "../components/Menu";
const MainLayout = () => {
  return (
    <>
      {/* Отображение меню сайта для компонениа Home и вложенных в него элементов. */}
      <Menu />
      {/* Вывод содержания других страниц(Link/a) из меню(Menu) после <Outlet />  */}
      <Outlet />
    </>
  );
};
export default MainLayout;
