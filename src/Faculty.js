import React, { Component } from 'react';

export default class Faculty extends Component {
    constructor(props){
        console.log("data",props)
        super(props)
        this.state={name:'ram'}
 
    }
    changeName(str){
        this.setState({name:'raj'})
    }
  render() {
    return <div>{this.state.name}
        <div><button onClick={()=>this.changeName('ram')}>change</button></div>
    </div>;
  }
}
