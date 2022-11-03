// Хук отслеживания состояния элементов.
import { useEffect, useState } from "react";
// Импорт react-router ссылок(Link) и хука useLocation объекта текущего состояния адреса.
import { Link, useLocation, useNavigate } from "react-router-dom";
// Превращение строки запроса адреса в объект с определенными свойтсвами.
import queryString from "query-string";
// Импорт массива объектов(курсов).
import courses from "../data/courses";

const SORT_KEYS = ["title", "slug", "id"];

// Сортировка курсов по переданному элементу(title,slug,id).
const sortCourses = (courses, key) => {
  // Локальная копия массива courses.
  const sortedCourses = [...courses];
  // Тип курса для сортировки НЕ определен(undefiend) либо такого типа не существует.
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  // Сортировка двух объектов по значениям(value) динамических ключей(key).
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  // Возврат отсортированного локального объекта.
  return sortedCourses;
};

// Все доступные курсы обучения.
const Courses = () => {
  // Получение всех свойств по адресу текущего местоположения(pathname: '', search: '', hash: '', state: null, key: '').
  const thisLocation = useLocation();
  // Получение всех свойств поиска в строке браузера(search:"?[sort=slug&type=react...]").
  const thisQuerySearch = queryString.parse(thisLocation.search);
  // Хук отслеживания свойства ключа(вида сортировки) "sort"(search:"?sort=[title,slug,id]").
  const [sortKey, setSortKey] = useState(thisQuerySearch.sort);
  // Хук отслеживания отсортированного массива по заданному типу.
  const [sortedCourses, setSortCourses] = useState(
    sortCourses(courses, sortKey)
  );
  // Хук перенаправления с текущего адреса на другой.
  const navigate = useNavigate();
  // Отслеживание состояния свойства ключа ?sort=... для сортировки массива объектов(курсов)/
  useEffect(() => {
    // Если свойство ключа не соотвествует имеющимся свойствам массива ["title", "slug", "id"], то происходит перенаправление на родительский адрес.
    if (!SORT_KEYS.includes(sortKey)) {
      // Перенаправление на родительский адрес.
      navigate(".", { relative: "path" });
      // Изменение состояния свойства ключа(sort) на undefined.
      setSortKey(undefined);
      // Сброс массива к начальному состоянию до применения метода filter().
      setSortCourses(...courses);
    }
  }, [sortKey, navigate]);
  console.log(sortKey);
  return (
    <>
      <h1>
        {/* Вывод сообщения об успешной сортировки если свойство ключа не undefined, в противном случае выводится строка Courses */}
        {sortKey ? `Courses has been sorted by "${sortKey}"` : `Courses`}
      </h1>
      {/* Создание массива ссылок(Link) на основе объектов массива курсов(courses) */}
      {sortedCourses.map(({ title, slug, id }) => {
        return (
          <div key={id}>
            <Link className="courseLink" to={slug}>
              {title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
