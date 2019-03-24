import React from 'react';
import { Link } from 'react-router-dom'

const LayoutFooter = ({IdObra}) => (
  <div className="app-layout__footer">
    <ul>
      <li>
        <Link to="/materiales"><i className="fa fa-cogs"/></Link>
      </li>
      <li>
        <Link to="/reuniones"><i className="fa fa-calendar"/></Link>
      </li>
      <li>
        <Link to={{ pathname: '/tareas', state: { IdObra } }}><i className="fa fa-list-ol"/></Link>
      </li>
    </ul>
  </div>
);

export default LayoutFooter;