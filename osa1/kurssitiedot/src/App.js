const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>{props.title} {props.num}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.num}</p>
      </div>
    )
  }

  return (
    <div>
      <Header title={course} />
      <Content title={part1} num={exercises1} />
      <Content title={part2} num={exercises2} />
      <Content title={part3} num={exercises3} />
      <Total num={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App