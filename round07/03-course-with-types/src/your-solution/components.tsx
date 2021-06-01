
import React from 'react';


export const Header = ({name}: {name: string}) => {

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );

};

interface Course{
  name: string,
  exerciseCount: number
}
interface CourseProps {
  courseParts: Course[];
}

export const Content: React.FC<CourseProps> = ({courseParts}: CourseProps) => {

  return (
    <div>
      {courseParts.map(c=> (
        <p key={c.name}> {c.name} {c.exerciseCount}</p>
      ))}
    </div>
  );
};



export const Total: React.FC<CourseProps> = ({courseParts}: CourseProps) => {

  return (
    <div>Total
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );

};
