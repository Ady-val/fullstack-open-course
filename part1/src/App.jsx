import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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
      <div>good {feedback.good}</div>
      <div>neutral {feedback.neutral}</div>
      <div>bad {feedback.bad}</div>
    </div>
  )
}

export default App