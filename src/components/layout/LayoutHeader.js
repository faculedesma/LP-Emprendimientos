import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/fontawesome-free-regular';

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
      <div>
        <ul>
          <li onClick={this.props.showLeftDrawer}>
            <div></div>
            <div></div>
            <div></div>
          </li>
          <li>
            <FontAwesomeIcon onClick={this.props.showTopDrawer} icon={faUserCircle} />
            {/* <i  className={faUserCircle}/> */}
            <p>Juan Jose</p>
          </li>
        </ul>
      </div>
      <div className="app-layout__header__title">
        {/* <p>{this.state.direccionObra}</p> */}
        <p>CHACABUCO 465</p>
      </div>
    </div>
  );
  }
}

export default LayoutHeader;