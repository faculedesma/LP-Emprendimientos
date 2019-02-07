import React from 'react';
import { Icon } from 'antd';
import Tareas from '../tareas/Tareas';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Layout.scss';

class Layout extends React.Component {

  render() {
    return (
        <div className="app-layout">
          <div className="app-layout__header">
            <ul>
              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>
              <li><i className="fa fa-user-circle"/></li>
            </ul>
          </div>
          <div className="app-layout__content">
            <div className="app-layout__content__title">
              <p>CHACABUCO 465</p>
            </div>
            <Tareas />
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
        </div>
    );
  }
}

export default Layout;