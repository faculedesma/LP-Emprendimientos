import React, { Component } from 'react';

class LayoutHeader extends Component {
  state = {
    direccionObra: '' 
  }

  componentDidMount = () => {
    this.setState({
      direccionObra: this.props.direccionObra
    })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if(prevState.direccionObra !== nextProps.direccionObra) {
      return {
        direccionObra: nextProps.direccionObra
      }
    }
    return null;
  }

  render() {
    return(
    <div className="app-layout__header">
      <ul>
        <li onClick={this.props.showLeftDrawer}>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li><i onClick={this.props.showTopDrawer} className="fa fa-user-circle"/></li>
      </ul>
      <div className="app-layout__header__title">
        <p>{this.state.direccionObra}</p>
      </div>
    </div>
  );
  }
}

export default LayoutHeader;