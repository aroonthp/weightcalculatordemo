
import React,{Component} from 'react';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {inputValue: ''}
  }
  onInputChange = e => {
    this.setState({inputValue: e.target.value.asNumber});
  }
  
  kgToGrams = () => {
    this.setState({
      inputValue: this.state.inputValue * 1000
    });
  }
  
 
 
  render() {
    return(
      <div className="weight-converter container">
        <div className="row">
          <div className="col-md-6">
             <div className="form-group">
                  <h3 className="display-4 text-center mb-4">Weight Converter</h3>
                  <input type="number" placeholder="Enter kg" className="form-control mb-4" value={ this.state.inputValue } onChange={ this.onInputChange }  />
              </div>
                  <div id="output">
                      <div className="card mb-2">
                          <div className="card-body card-primary">
                            <h4 id="gramsOutput">Grams:{ this.state.inputValue }</h4>
            
                          </div>
                      </div>
                   </div>
               </div>
             </div>
      </div>
    );
  }
}

