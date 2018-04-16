import React from 'react';
import PeopleList from './PeopleList.jsx'
class People extends React.Component{
  constructor(props){
    super(props);
    this.state={
      People:[]
    }
  }
  render(){
    return(
      <div>Hello
        <PeopleList  people={this.state.People}/>
      </div>
    )
  }
}
export default People
