import React from 'react';

const LayoutHeader = ({ showLeftDrawer, showTopDrawer }) => (
  <div className="app-layout__header">
    <ul>
      <li onClick={showLeftDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </li>
      <li><i onClick={showTopDrawer} className="fa fa-user-circle"/></li>
    </ul>
  </div>
);

export default LayoutHeader;