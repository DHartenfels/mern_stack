import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
  <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part} {props.ex}
      </p>
    </>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.array.part[0].name} ex={props.array.part[0].exercises} />
      <Part part={props.array.part[1].name} ex={props.array.part[1].exercises} />
      <Part part={props.array.part[2].name} ex={props.array.part[2].exercises} />
    </div>
  )
}


const Footer = (props) => {
  return(
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const array = {
    part:[
      {
        name:'Fundamentals of React',
        exercises : 10  
      },
      {
        name:'Using props to pass data',
        exercises : 7  
      },
      {
        name:'State of a component',
        exercises : 14  
      },
    ]
  }

  return (
    <div>
      <Header name={course}/>
      <Content array = {array}/>
      <Footer ex1={array.part[0].exercises} ex2={array.part[1].exercises} ex3={array.part[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))