// Импорт react-router ссылок(Link).
import { Link } from "react-router-dom";
// Импорт массива объектов(курсов).
import courses from "../data/courses";
// Все доступные курсы обучения.
const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {/* Создание массива ссылок(Link) на основе объектов массива курсов(courses) */}
      {courses.map(({ title, slug, id }) => {
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
