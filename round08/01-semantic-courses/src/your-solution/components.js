import { Header, Icon, Table } from "semantic-ui-react"

const CourseHeader = ({ course, icon }) =>
  <Header as="h2">
    <Icon name={icon}></Icon>{course}
  </Header>


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
    <Table.Row>
      <Table.Cell>
        {part.name}
      </Table.Cell>
      <Table.Cell>
        {part.exercises}
      </Table.Cell>
    </Table.Row>
  )
}


const Total = ({ parts }) => {
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          Exercises Total
        </Table.HeaderCell>
        <Table.HeaderCell>
          {total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  )
}

export const Course = ({ course }) => {
  return (
    <>
      <CourseHeader course={course.name} icon={course.icon} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Part</Table.HeaderCell>
            <Table.HeaderCell>Exercises</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </Table>
    </>
  )
}

