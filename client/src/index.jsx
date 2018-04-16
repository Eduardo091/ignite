import React from 'react';
import ReactDOM from 'react-dom';
import People from './components/people/People.jsx';
import PrimeNumbers from './components/numbers/Numbers.jsx'
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        Im rendering
        <People />
        <PrimeNumbers />

      </div>
)
  }

}ReactDOM.render(<App/>, document.getElementById('app'))
