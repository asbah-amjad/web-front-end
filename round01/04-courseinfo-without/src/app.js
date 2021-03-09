
'use strict';

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
const commitSHA = '1ca2c5f';   
// ------------------------------------------------------------ //

const e = React.createElement;

const Header = props => {
    return e( 'div', null,
        e( 'h1', null, props.course.name)
    );
};

const Part = props => null;

const Content = props => {
    return e("div", null,
     e("p", null, props.course.parts[0].name, " ", props.course.parts[0].exercises), 
     e("p", null, props.course.parts[1].name, " ", props.course.parts[1].exercises), 
     e("p", null, props.course.parts[2].name, " ", props.course.parts[2].exercises));
  };

  const Total = props => {
    return e("div", null, 
    e("p", null, 
    props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises));
  };

const App = ({ course }) => {
    return e( 'div', null,
    e( Header, {course: course}),
    e( Content, {course: course}),
    e( Total, {course: course}));
};
