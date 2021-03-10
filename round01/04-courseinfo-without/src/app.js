'use strict';

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
const commitSHA = '1ca2c5f';   
// ------------------------------------------------------------ //


const Header = props => {
    return createElement( 'div', null,
    createElement( 'h1', null, props.course.name)
    );
};

const Part = props => null;

const Content = props => {
    return createElement("div", null,
    createElement("p", null, props.course.parts[0].name, " ", props.course.parts[0].exercises), 
    createElement("p", null, props.course.parts[1].name, " ", props.course.parts[1].exercises), 
    createElement("p", null, props.course.parts[2].name, " ", props.course.parts[2].exercises));
  };

  const Total = props => {
    return createElement("div", null, 
    createElement("p", null, 
    props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises));
  };

const App = ({ course }) => {
  
    return createElement( 'div', null,
    createElement( Header, {course: course}),
    createElement( Content, {course: course}),
    createElement( Total, {course: course}));
};
