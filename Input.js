import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super();
    this.state = {
      InputValue: "",
      result:""
    }
  }
  handleChange = (e)=>{
    this.setState({
      InputValue:e.target.value
    });
  }
  converter = ()=>{
    const ap = this.state.InputValue *1000;
    this.setState({
      result:ap
    });
  }
  render() {
    return (
      <form>
        <label>
          KG:
          <input type="text"  onChange={this.handleChange}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.converter}/>
        <label>
        Gram:{this.state.result}
        
        </label>
        
        
      </form>
    )
  }
}


















































