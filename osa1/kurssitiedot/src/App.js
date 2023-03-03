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

  const Part = (props) =>{
    return (
      <p>{props.text} {props.num}</p>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part text={part1} num={exercises1}/>
        <Part text={part2} num={exercises2}/>
        <Part text={part3} num={exercises3}/>
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
      <Content />
      <Total num={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App