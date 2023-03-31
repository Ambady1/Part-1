import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad;
  const condition = all > 0;
  return(
    <div>
  <h1>give feedback</h1>
  <Button text="good" handleClick={handleGoodClick} />
  <Button text="neutral" handleClick={handleNeutralClick} />
  <Button text="bad" handleClick={handleBadClick} />
  <h1>statistics</h1>
  {condition ? (
    <Statistics good={good} neutral={neutral} bad={bad} all={all} />
  ) : (
    <p>No feedback given</p>
  )}
</div>
);

}

export default App