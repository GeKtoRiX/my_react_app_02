// Хук получения параметров пути через (/courses/:paramName).
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Массив объектов разных курсов.
import courses from "../data/courses";
const SingleCourse = () => {
  // Параметры текущего пути /:courseSlug.
  const params = useParams();
  // Поиск объекта course со свойством slug[react/JavaScript/Python/Node-js] равным текущему пути(course/courseSlug[react/JavaScript/Python/Node-js])
  const curCourse = courses.find((course) => course.slug === params.courseSlug);
  return (
    <>
      <h1>{curCourse.title}</h1>
      <h2>{curCourse.slug}</h2>
      <h2>{curCourse.id}</h2>
      {/* Возврат к предыдущему адресу маршрута по path. */}
      <Link className="courseLink" to={".."} relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
