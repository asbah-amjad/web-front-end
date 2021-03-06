
import { useState } from 'react';

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //

const Display = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Values = (props) => {
  return (
    <div>
      <p>{props.name} {props.value}</p>
    </div>
  )
}

export const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClickHandler = () => setGood(good + 1)
  const neutralClickHandler = () => setNeutral(neutral + 1)
  const badClickHandler = () => setBad(bad + 1)
  const total = good + neutral + bad
  const positive = good / total
  const average = (good - bad) / total

  return (
    <div>
      <Display name="give feedback" />
      <Button handleClick={goodClickHandler} text="good" />
      <Button handleClick={neutralClickHandler} text="neutral" />
      <Button handleClick={badClickHandler} text="bad" />
      <Display name="statistics"/>
      <Values name="good" value={good}/>
      <Values name="neutral" value={neutral}/>
      <Values name="bad" value={bad}/>
      <Values name="all" value={total}/>
      <Values name="average" value={average}/>
      <Values name="positive" value={positive}/>
    </div>
  )
}
