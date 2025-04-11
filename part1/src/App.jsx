import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total || 0
  const positive = (good / total) * 100 || 0

  if (total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1
    })
  }

  return (
    <div>
      <Title title="give feedback" />
      <Button handleClick={() => handleFeedback('good')} text="good" />
      <Button handleClick={() => handleFeedback('neutral')} text="neutral" />
      <Button handleClick={() => handleFeedback('bad')} text="bad" />
      <Title title="statistics" />
      <Statistics {...feedback}/>
    </div>
  )
}

export default App