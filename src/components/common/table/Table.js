import React from 'react';
import TableRow from './TableRow';
import './Table.scss';

const Table = ({ tableType, content, updateTarea, deleteTarea, finishTarea, unfinishTarea, isCreateForm }) => {
  return (
    <div className="table">
      {
        content.map(row => {
          return (
            <TableRow 
              key={row.IdTarea}
              row={row}
              tableType={tableType}
              handleUpdateTarea={updateTarea}
              handleDeleteTarea={deleteTarea}
              finishTarea={finishTarea}
              unfinishTarea={unfinishTarea}
              isCreateForm={isCreateForm}
            />
          );
        })
      }
    </div>
  );
}

export default Table;