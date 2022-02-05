import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
        constructor(props){
            super(props)
            this.state={pName:'parent'}
            this.getParentName=this.getParentName.bind(this)
        }
        //parentName is parent method
        getParentName(){
            alert("calling parent method from child")
            console.log("this",this)
            console.log("name",this.state.pName)
        }
        callMe(){
            alert("callParent")
        }
  render() {
    return <div><Child callParent={this.callMe}></Child></div>;
  }
}
