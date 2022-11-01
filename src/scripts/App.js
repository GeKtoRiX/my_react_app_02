// Переход между разными страницами(компонентами) сайта.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// =======[REACT_ROUTES_COMPONENTS]=======
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
// =======[_________END_________]=======

// Стили рендеринга главного компонента сайта.
import "../styles/scss/index.scss";

// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // =======[HOOKS]=======

  // =======[_END_]=======

  // =======[HANDLERS]=======

  // =======[___END___]=======
  return (
    // Отслеживание маршрутов браузера для отображения компонентов(страниц) сайта.
    <BrowserRouter>
      <div className="app">
        {/* Все маршруты браузера отображения страниц(компонентов) сайта. 
            Адреса маршрутов написаны как относительные(независимые от корневых имен)*/}
        <Routes>
          {/* Корневой маршрут с указанием пути "/" */}
          <Route path="/" element={<MainLayout />}>
            {/* Маршрут к компоненту Home, выбранному в виде главной index страницы(компонента) с указанием пути "/Home" */}
            <Route index element={<Home />} />
            {/* Маршрут к компоненту about с указанием пути "/about" */}
            <Route path="about" element={<About />} />
            {/* Маршрут к компоненту contacts с указанием пути "/contacts" */}
            <Route path="contacts" element={<Contacts />} />
            {/* Маршрут к несуществующему маршруту с указанием пути "*" */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
