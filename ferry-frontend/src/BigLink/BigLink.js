import React, { Component } from 'react';
import { Link } from 'react-router'; 

import '../BigText/BigText.css';
import './BigLink.css';

class BigLink extends Component {
  render() {
    return (
      <div className="BigText BigLink">
        <Link to={this.props.href}> {this.props.text} </Link>
      </div>
    );
  }
}

export default BigLink;
