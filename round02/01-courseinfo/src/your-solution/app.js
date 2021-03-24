import CourseList from "./components.js";
import courses from "./courses-data.js";

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //


export const App = () => {

  return(
    <CourseList courses={courses} />
  )
  
};



