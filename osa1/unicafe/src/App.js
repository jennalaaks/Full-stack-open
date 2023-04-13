import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  // const [total, setTotal] = useState(0)
  // const [positive, setPositive] = useState(0)

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  })

  const handleClickGood = () => {
    const newFeedback = {
      good: feedback.good + 1,
      neutral: feedback.neutral,
      bad: feedback.bad,
      total: feedback.total + 1,
      positive: feedback.positive + 1,
    }
    setFeedback(newFeedback)
  }

  const handleClickNeutral = () => {
    const newFeedback = {
      good: feedback.good,
      neutral: feedback.neutral + 1,
      bad: feedback.bad,
      total: feedback.total + 1,
      positive: feedback.positive,
    }
    setFeedback(newFeedback)
  }

  const handleClickBad = () => {
    const newFeedback = {
      good: feedback.good,
      neutral: feedback.neutral,
      bad: feedback.bad + 1,
      total: feedback.total + 1,
      positive: feedback.positive - 1,
    }
    setFeedback(newFeedback)
  }

  const Button = ({handleClick, text}) => {
    return (
      <button  onClick={handleClick}>
        {text}
      </button>
    )
  }
  if(feedback.total == 0) {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />

        <h2>Statistic</h2>
        <p>No feedback given.</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />

        <h2>Statistic</h2>
        <table>
          <tbody>
            <StatisticLine text='good' value={feedback.good} ></StatisticLine>
            <StatisticLine text='neutral' value={feedback.neutral} ></StatisticLine>
            <StatisticLine text='bad' value={feedback.bad} ></StatisticLine>
            <StatisticLine text='total' value={feedback.total} ></StatisticLine>
            <StatisticLine text='positive' value={feedback.positive} ></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App