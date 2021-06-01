import React from "react";
import { CoursePart } from "./course-data";

export const Header = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  switch (coursePart.type) {
    case "normal":
      return (
        <p>
          <b>
            {coursePart.name} {coursePart.exerciseCount}
          </b>
          <br />
          <i>{coursePart.description}</i>
        </p>
      );
    case "groupProject":
      return (
        <p>
          <b>
            {coursePart.name} {coursePart.exerciseCount}
          </b>
          <br />
          <i>{coursePart.groupProjectCount}</i>
        </p>
      );
    case "submission":
      return (
        <p>
          <b>
            {coursePart.name} {coursePart.exerciseCount}
          </b>
          <br />
          <i>
            {coursePart.description} {coursePart.exerciseSubmissionLink}
          </i>
        </p>
      );
    case "special":
      return (
        <p>
          <b>
            {coursePart.name} {coursePart.exerciseCount}
          </b>
          <br />
          <i>{coursePart.description}</i>
          <br />
          <span>required skills: {coursePart.requirements.join(", ")} </span>
        </p>
      );
  }
};
export const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((part) => (
        <Part coursePart={part} key={part.name} />
      ))}
    </div>
  );
};

export const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      Total
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};
