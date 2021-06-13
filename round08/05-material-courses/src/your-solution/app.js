
import { Course } from './components';
import courses from './courses-data';
import { Container, Divider } from '@material-ui/core';

// ** ENTER COMMIT SHA OF YOUR REPO IN HERE **
export const commitSHA = '1ca2c5f';

export const App = () => {

  return (
    <Container fixed>
      <h1>Web development curriculum</h1>
      <Divider />
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </Container>
  )
}
