import React, { Component } from 'react';

class DebitSecondInput extends Component {

  render() {
    const {percentage} = this.props.transactionFormData
    const percentage_options = [0,1,2,3,4,5,6,7,8,9,10]
    const percentage_select = percentage_options.map(percent => {
      return <option value={percentage} key={percent} name="percentage">{percent}%</option>
    })

    return(
      <div>
        <form onSubmit={this.props.handleSecondSubmit}>
        <div>
          <label>What percentage of this deposit should be allocated to each fund?
            <select onChange={this.handleOnChange}>
              {percentage_select}
            </select>
          </label>
        </div>

          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    )
  }
}

export default DebitSecondInput
