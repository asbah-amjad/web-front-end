import 'semantic-ui-css/semantic.min.css';
import { Course } from './components';
import courses from './courses-data';
import { Header, Divider, Container } from 'semantic-ui-react';

// ** ENTER COMMIT SHA OF YOUR REPO IN HERE **
export const commitSHA = '1ca2c5f';

export const App = () => {

  return (
    <Container>
      <Header as="h1">Web development curriculum</Header>
      <Divider></Divider>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </Container>
  )
}
