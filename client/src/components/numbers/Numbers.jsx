import React from 'react';
import $ from 'jquery';
import NumberList from './NumberList.jsx'
class PrimeNumbers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      numbers:[]
    }
    this.getNumbers=this.getNumbers.bind(this);
    this.isItPrime=this.isItPrime.bind(this);
}

getNumbers(){
$.ajax({
 url: 'http://174.138.36.217/numbers/',
 method: 'GET',
 success: (results) => {
   this.setState({numbers: results});
 },
 error: (xhr, err) => {
   console.log('err', err);
 }
})
}

isItPrime(number) {
  for(var i = 2; i < number; i++)
    if(number % i === 0){
      return number + " " + "it is not a prime number";
    }else{
  return number + " " + "Is a prime number";
}
}

componentDidMount(){
this.isItPrime(this.getNumbers())
}
    render(){
      return(
        <div>
        Number List Rendering
        <NumberList numbers={this.state.numbers} isItPrime={this.isItPrime} />
      </div>
      )
    }

  }
  export default PrimeNumbers
