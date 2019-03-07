import React from 'react';
import { Drawer } from 'antd';
import Tareas from '../tareas/TareasConnector';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Layout.scss';

const tableType = {
  TAREAS: 'TAREAS',
  REUNIONES: 'REUNIONES',
  MATERIALES: 'MATERIALES'
};

class Layout extends React.Component {
  state = {
    visibleLeft: false,
    visibleTop: false
  };

  showDrawer = () => {
    this.setState({
      visibleLeft: true,
    });
  };

  onCloseDrawer= () => {
    this.setState({
      visibleLeft: false,
    });
  };

  showTopDrawer = () => {
    this.setState({
      visibleTop: true,
    });
  };

  onCloseTopDrawer= () => {
    this.setState({
      visibleTop: false,
    });
  };

  render() {
    return (
        <div className="app-layout">
          <div className="app-layout__header">
            <ul>
              <li onClick={this.showDrawer}>
                <div></div>
                <div></div>
                <div></div>
              </li>
              <li><i onClick={this.showTopDrawer} className="fa fa-user-circle"/></li>
            </ul>
          </div>
          <div className="app-layout__content">
            <div className="app-layout__content__title">
              <p>CHACABUCO 465</p>
            </div>
            <Tareas tableType={tableType.TAREAS} />
          </div>
          <div className="app-layout__footer">
            <ul>
              <li>
                <i className="fa fa-cogs"/>
              </li>
              <li>
                <i className="fa fa-calendar"/>
              </li>
              <li>
                <i className="fa fa-list-ol"/>
                </li>
            </ul>
          </div>
          <Drawer
            placement="left"
            width="50%"
            closable={false}
            onClose={this.onCloseDrawer}
            visible={this.state.visibleLeft}
          >
            
          </Drawer>
          <Drawer
            placement="top"
            height="40%"
            closable={false}
            onClose={this.onCloseTopDrawer}
            visible={this.state.visibleTop}
          >
            
          </Drawer>
        </div>
    );
  }
}

export default Layout;