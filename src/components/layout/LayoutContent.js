import React from 'react';

const LayoutContent = children => {
  console.log(children);
  return (
    <div className="app-layout__content">
      <div className="app-layout__content__title">
        <p>CHACABUCO 465</p>
      </div>
      {children.children}
    </div>
  );
}

export default LayoutContent;
