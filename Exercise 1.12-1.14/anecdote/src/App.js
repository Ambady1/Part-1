import { useState } from 'react'
const Anecdote = ({ anecdote }) => {
  if (!anecdote) {
    return null;
  }

  return (
    <div>
      <div>{anecdote.text}</div>
      <div>has {anecdote.votes} votes</div>
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const App = () => {
  const [selected, setSelected] = useState(0)

  const [anecdotes, setAnecdotes] = useState([
    {
      text: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      text: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ])
  const handleAnecdotesClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }
  const handleVoteClick = () => {
    const updatedAnecdotes = [...anecdotes]
    updatedAnecdotes[selected] = {
      ...updatedAnecdotes[selected],
      votes: updatedAnecdotes[selected].votes + 1
    }
    setAnecdotes(updatedAnecdotes)
  }
  const Mostvotes = anecdotes.reduce((prev, curr) => {
    return prev.votes > curr.votes ? prev : curr;
  })
  return (
    <div>
      <h1>Anecdote of the day</h1>
     <Anecdote anecdote={anecdotes[selected]} />
      <Button text="next anecdote" handleClick={handleAnecdotesClick} />
      <Button text="vote" handleClick={handleVoteClick} />

      <h1>Anecdote with most votes</h1>
       {Mostvotes.text}<br/>
      {Mostvotes.votes}
      </div>
  );
}
export default App;