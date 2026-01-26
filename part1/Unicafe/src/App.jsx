import { useState } from 'react'

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({rating, num}) => <div>{rating} {num}</div>

const Statistics = ({good, neutral, bad}) => {
  return(
    <div>
      {/*<StatisticLine rating="good" num={good}/>
      <StatisticLine rating="neutral" num={neutral}/>
      <StatisticLine rating="bad" num={bad}/>
      <StatisticLine rating="all" num={good + neutral + bad}/>
      <StatisticLine rating="average" num={(good - bad)/(good + neutral + bad)}/>
      <StatisticLine rating="positive" num={`${(good * 100)/(good + neutral + bad)} %`}/>*/}

      <table>
        <tbody>

          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>

          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
    
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>

          <tr>
            <td>average</td>
            <td>{(good - bad)/(good + neutral + bad)}</td>
          </tr>

          <tr>
            <td>positive</td>
            <td>{`${(good * 100)/(good + neutral + bad)} %`}</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

const Feedback =  ({good, neutral, bad}) => {

  let myDiv

  if(good + neutral + bad == 0){
        myDiv = <div>No feedback given</div>
  }else{
    myDiv = Statistics({good, neutral, bad})
  }
  return myDiv
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback"/>
      <div>
        <Button onClick={() => setGood(good + 1)} text="good"/>
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button onClick={() => setBad(bad + 1)} text="bad"/>
      </div>
      <Header title="statistics"/>
      <Feedback good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App