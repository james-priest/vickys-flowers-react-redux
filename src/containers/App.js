import React, { Component } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    return (
      <>
        <Header />
        <div className="scroll-container">
          <ProductList />
          <Footer />
        </div>
      </>
    )
  }
}

export default connect(
  null,
  { handleInitialData }
)(App)
