
// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //


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
  return (
    parts.reduce((sum, parts) => {
      return sum + parts.exercises 
    }, 0)
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
        {course.parts.map(parts => 
          <Part key={parts.id} parts={parts} />
        )}
      <b>total of <Total parts={course.parts}/> exercises </b>     
    </div>
  )
}

export const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />

}

