
import { useState } from 'react';

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //

const Display = (props) => <div><h1>{props.name}</h1></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => <div><p>{props.text} {props.value}</p></div>

const Feedback = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <Statistics text="good" value={props.vl[0]}/>
      <Statistics text="neutral" value={props.vl[1]}/>
      <Statistics text="bad" value={props.vl[2]}/>
      <Statistics text="all" value={props.vl[3]}/>
      <Statistics text="average" value={props.vl[4]}/>
      <Statistics text="positive" value={props.vl[5]}/>
    </div>
  )
}

export const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const goodClickHandler = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }
  const neutralClickHandler = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }
  const badClickHandler = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  let total = good + neutral + bad
  let positive = good / total
  let average = (good - bad) / total

  const vl = [good, neutral, bad, total, average, positive]

  return (
    <div>
      <Display name="give feedback" />
      <Button handleClick={goodClickHandler} text="good" />
      <Button handleClick={neutralClickHandler} text="neutral" />
      <Button handleClick={badClickHandler} text="bad" />
      <Display name="statistics"/>
      <Feedback allClicks={allClicks} vl={vl}/>
      
    </div>
  )
}
