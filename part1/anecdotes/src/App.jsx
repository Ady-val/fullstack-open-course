import { useState } from 'react'


const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ anecdote }) => {
  if (!anecdote) {
    return <div>Press the button to see an anecdote</div>
  }

  return (
    <div>
      <p>{anecdote}</p>
    </div>
  )
}

const Votes = ({ votes }) => {
  if (!votes) {
    return (
      <div>This anecdotes dosen't have votes</div>
    )
  }

  if (votes === 1) {
    return (
      <div>Has 1 vote</div>
    )
  }

  return (
    <div>Has {votes} votes</div>
  )
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

function App() {
  const [selected, setSelected] = useState('')
  const [anecdoteIndex, setAnecdoteIndex] = useState()
  const [votes, setVotes] = useState({})
  const [error, setError] = useState()

  const handleVote = () => {
    if (anecdoteIndex === undefined) {
      setError('You need to find an anecdote')
      return 
    }

    if (votes[anecdoteIndex]) {
      setVotes({
        ...votes,
        [anecdoteIndex]: votes[anecdoteIndex] + 1
      })
    } else {
      setVotes({
        ...votes,
        [anecdoteIndex]: 1
      })
    }
  }

  const handleChangeAnecdote = () => {
    setError()
    const randomIndex = getRandomInt(anecdotes.length)
    setAnecdoteIndex(randomIndex)
    setSelected(anecdotes[randomIndex])
  }

  return (
    <>
      <h1>Anectoes</h1>
      <Anecdote anecdote={selected} />
      <Votes votes={votes[anecdoteIndex]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleChangeAnecdote} text="Find Anecdote" />
      <div>{error}</div>
    </>
  )
}

export default App
