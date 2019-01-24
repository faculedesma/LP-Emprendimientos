import React, { Component } from 'react';
import axios from 'axios';

class Obras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obras: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/obras')
      .then(obras => {
        console.log(obras);
        this.setState({
          obras: obras.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const obras = this.state.obras;
    const listItems = obras.map(obra =>
      <li>{obra.Obra}</li>
    );

    return (
      <div>
        <h1>Obras</h1>
        <ul>{listItems}</ul>
      </div >
    );
  }
}

export default Obras;