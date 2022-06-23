import React, { Component } from 'react';

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"khilti"
        };
}
handleClick = () => {
        this.setState({name: "Khilti Savla"})

};    

  render(){
    return(
    <>
    <div>
      <h1> Hello, {this.state.name}
      </h1>
      <button onClick={this.handleClick}> CLick here!</button>
    </div>
    </> 
    );
  }
}

export default Student; 
