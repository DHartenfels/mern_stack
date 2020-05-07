import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
  <h1>{props.array.name}</h1>
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
    <p>Number of exercises {props.array.part[0].exercises + props.array.part[1].exercises + props.array.part[2].exercises}</p>
  )
}


const App = () => {
  const array = {
    name:'Half Stack application development',
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
      <Header array = {array}/>
      <Content array = {array}/>
      <Footer array = {array}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))