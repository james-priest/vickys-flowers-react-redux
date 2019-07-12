import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateQuantity } from '../actions/products'

class DropDown extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }
  // state = {
  //   value: 0
  // }
  componentDidMount() {
    this.randomizeSelection()
  }
  handleChange = e => {
    // this.setState({
    //   value: e.target.value
    // })
    const { id, updateQuantity } = this.props
    updateQuantity(id, e.target.value)
  }
  randomizeSelection = () => {
    const value = Math.floor(Math.random() * 20) + 1
    // this.setState({
    //   value
    // })
    const { id, updateQuantity } = this.props
    updateQuantity(id, value)
    console.log('value', value)
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
        <label htmlFor={id} className="a11y">
          Quantity
        </label>
        <select
          id={id}
          className="product-select"
          aria-label="quantity"
          value={this.props.selectedQty}
          onChange={this.handleChange}
        >
          {this.createOptions()}
        </select>
      </>
    )
  }
}

const mapStateToProps = ({ products }, { id }) => {
  return {
    selectedQty: products[id].selectedQty
  }
}

export default connect(
  mapStateToProps,
  { updateQuantity }
)(DropDown)
