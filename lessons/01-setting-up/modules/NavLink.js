import React from 'react'
import { Link } from 'react-router'

// We will use a spread operator here, the three dots. It clones our props and in this use case it clones activeClassName to our desired component for us to benefit from.

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
