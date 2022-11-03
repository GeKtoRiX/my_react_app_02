// Переход между разными страницами(компонентами) сайта.
import { Route, Routes } from "react-router-dom";
// =======[REACT_ROUTES_COMPONENTS]=======
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
// =======[_________END__________]=======
// Стили рендеринга главного компонента сайта.
import "../styles/scss/index.scss";
// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // =======[HOOKS]=======

  // =======[_END_]=======

  // =======[HANDLERS]=======

  // =======[___END___]=======
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseSlug" element={<SingleCourse />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route  path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
