import React from 'react';
import $ from 'jquery';
class CapLetter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      text:''
    }
    this.getCaps=this.getCaps.bind(this);
    this.capTitle=this.capFirstLetters.bind(this);
    this.capFirstOfSentence=this.capFirstOfSentence.bind(this);
  }
    getCaps(){
    $.ajax({
     url: 'http://174.138.36.217/texts/',
     method: 'GET',
     success: (results) => {
       this.setState({title:results[0].title, text:results[0].text});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
    })
    }
    capFirstLetters(str) {
     var string = str.toLowerCase().split(' ');
     for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join(' ');
};

   capFirstOfSentence(str) {
    var string = str.toLowerCase().split('. ');
    for (var i = 0; i < string.length; i++) {
     string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
}
return string.join('. ');
};
componentDidMount(){
  this.getCaps()
}

  render(){
    return(
      <div className='Letters'>
        Rendering titled Letters
          <li>{this.capFirstLetters(this.state.title)}<br/></li>
          <li>{this.capFirstOfSentence(this.state.text)}</li>



      </div>
    )
  }
}
export default CapLetter
