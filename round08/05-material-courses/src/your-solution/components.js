import {
  Table,
  TableHead,
  TableCell,
  TableFooter,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'

const CourseHeader = ({ course, icon }) =>
  <h2>
    {icon} {course}
  </h2>


const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />)
      }
    </>
  )
}


const Part = ({ part }) => {

  return (
    <TableRow>
      <TableCell>
        {part.name}
      </TableCell>
      <TableCell>
        {part.exercises}
      </TableCell>
    </TableRow>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          Exercises Total
        </TableCell>
        <TableCell>
          {total}
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}

export const Course = ({ course }) => {
  return (
    <>
      <CourseHeader course={course.name} icon={course.icon} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Part</TableCell>
              <TableCell>Exercises</TableCell>
            </TableRow>
          </TableHead>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </Table>
      </TableContainer>

    </>
  )
}

