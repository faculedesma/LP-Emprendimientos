import React, { Component } from 'react';
import { List } from 'antd';
import { Progress } from 'antd';
import loadObras from '../../redux/obras/ObrasActions';
import './Obras.scss';

class Obras extends Component {
  state = {
    tareas: [
      'Tarea 1',
      'Tarea 2',
      'Tarea 3',
      'Tarea 4',
      'Tarea 5',
    ]
  };

  // componentWillMount() {
  //   this.setState({
  //     obras: this.props.loadObras
  //   });
  // }

  render() {
    //const obras = this.state.obras;
    console.log(loadObras());
    // const listItems = obras.map(obra =>
    //   <li>{obra.Obra}</li>
    // );

    return (
      <div>
        <h1>Obras</h1>
        {/* <ul>{listItems}</ul> */}
      </div >
    );
  }
}

export default Obras;