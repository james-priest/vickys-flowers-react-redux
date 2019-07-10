import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropDown extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  }
  state = {
    value: this.props.value
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  createOptions = ({ count } = this.props) => {
    const optionElements = []
    for (let i = 1; i <= count; i++) {
      optionElements.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return optionElements
  }

  render() {
    const { id } = this.props
    return (
      <>
        <label htmlFor={`product${id}`} className="a11y">
          Quantity
        </label>
        <select
          id={`product${id}`}
          className="product-select"
          aria-label="quantity"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.createOptions()}
        </select>
      </>
    )
  }
}
