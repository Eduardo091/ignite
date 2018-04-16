import React from 'react';
import ReactDOM from 'react-dom';
import People from './components/people/People.jsx';
import PrimeNumbers from './components/numbers/Numbers.jsx';
import CapLetter from './components/CapLetters/CapLetters.jsx'
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        Im rendering
        <People />
        <br/><br/><br/>
        <PrimeNumbers />
        <br/><br/><br/>
        <CapLetter />

      </div>
)
  }

}ReactDOM.render(<App/>, document.getElementById('app'))
