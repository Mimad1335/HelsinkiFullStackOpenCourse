const Header = ({header}) => <div><h1>{header}</h1></div>

const Part = ({part}) => <div>{part.name} {part.exercises}</div>

const Total = ({exercises}) => {
    let initialTotal = 0;
    const total = exercises.reduce(
        (acc, curr) => acc + curr, initialTotal, 
    );

    return(<div><h4>total of {total} exercises</h4></div>) 
}

const Content = ({course}) => {
    return(
        <div>
            <Header header={course.name}/>
            {
                course.parts.map(part => 
                    <div key={part.id}><Part part={part}/></div>
                )
            }
            <Total exercises={course.parts.map(part => part.exercises)}/>
        </div>
    )
}

const Course = ({courses}) => {
    return(
        <div>
            {courses.map(course => 
                <Content key={course.id} course={course}/>
            )}
        </div>

    )
}

export default Course