import React from 'react';
import $ from 'jquery'
import PeopleList from './PeopleList.jsx'
class People extends React.Component{
  constructor(props){
    super(props);
    this.state={
      People:[]
    }
    this.getPeople=this.getPeople.bind(this)
  }
    getPeople(){
   $.ajax({
     url: 'http://174.138.36.217/people/',
     method: 'GET',
     success: (results) => {
       this.setState({People: results});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
 }

  componentDidMount(){
    this.getPeople()
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
