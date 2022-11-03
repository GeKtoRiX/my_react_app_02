// Хук отслеживания состояния элементов повторного вызова.
import { useEffect } from "react";
/* Хук seParams для получения параметров пути через (/courses/:paramName).
Хук useNavigate для возможности перенаправлять запросы на другие адреса.
*/
import { useNavigate, useParams } from "react-router";
// Компонент создание ссылок(Link) на разные адреса компонентов.
import { Link } from "react-router-dom";
// Массив объектов возможных курсов.
import courses from "../data/courses";

// Функция работы с адресами-параметрами /course/:ciurseSlug и отображением связанных с ними компонентов.
const SingleCourse = () => {
  // Получение параметра(имени) текущего адреса строки браузера(/Course/:CourseSlug).
  const courseSlug = useParams().courseSlug;
  // Хук перенаправления на адрес другого компонента в случае ошибки поиска конкретного курса.
  const navigate = useNavigate();
  // Поиск совпадения (slug: value) элемента объекта(курса) и параметра текущего адреса(/Course/:CourseSlug).
  const curCourse = courses.find((course) => course.slug === courseSlug);
  // Хук отслеживания изменения состояния переменной перенаправления на другой адрес компонента.
  useEffect(() => {
    // При несовпадении запроса адреса курса перенаправляет на адрес одним уровнем выше.
    if (!curCourse) {
      navigate("..", { relative: "path" });
    }
    // Список отслеживаемых зависимостей.
  }, [curCourse, navigate]);
  // Возврат блока информации из объекта определенного курса.
  return (
    <>
      <h1>{curCourse?.title}</h1>
      <h2>{curCourse?.slug}</h2>
      <h2>{curCourse?.id}</h2>
      {/* Возврат к предыдущему адресу маршрута по path. */}
      <Link className="courseLink" to={".."} relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
