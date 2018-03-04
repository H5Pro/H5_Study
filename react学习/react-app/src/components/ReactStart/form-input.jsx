/*Created by fjl on 2018/1/20*/
import React, {Component} from 'react';

class FormInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      remark: ''
    }
    this.handleChange = (e) => {
      var newV =  parseFloat(e.target.value);
      newV = Number.isNaN(newV) ? '' : newV;

      this.setState({
        remark: newV
      });
      console.log(this.state.remark)
    }
  }
  render() {
    return (
            <form class="form-input">
              <label>
                备注
                {this.state.remark}
                <textarea value={this.state.remark} onChange={this.handleChange}></textarea>
              </label>
            </form>
    );
  }
}

export default FormInput;
