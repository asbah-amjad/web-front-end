
const Header = props =>
  <h1>
    {props.course}
  </h1>

const Part = ({ parts }) => {
  return (
    <p>{parts.name} {parts.exercises}</p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, parts) => {
    return sum + parts.exercises 
  }, 0);
  return (
    <b>total of {total} exercises</b>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
        {course.parts.map(parts => 
          <Part key={parts.id} parts={parts} />
        )}
      <Total parts={course.parts}/>     
    </div>
  )
}

const CourseList = ({ courses }) => {

  const courseList = courses.map((course) => {
    return <Course key={course.id} course={course} />;
  });
  return (
    <div>{courseList}</div>
  )
}

export default CourseList;