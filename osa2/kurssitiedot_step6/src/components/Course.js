const Course = ({course}) => {

    const Header = ({name}) => {
        return (
        <div>
            <h1>{name}</h1>
        </div>
        )
    }

    const Part = (props) =>{
        return (
        <p>{props.name} {props.exercises}</p>
        )
    }

    const Content = ({parts}) => {

        return (
        parts.map((part) => {
            return <Part name={part.name} exercises={part.exercises} />;
        })
        )
    }

    const Total = ({parts}) => {

        const total = parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises;
        }, 0);

        return (
        <div>
            total of {total} exercies.
        </div>
        )
    }

    return (
        <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    )
}

export default Course;