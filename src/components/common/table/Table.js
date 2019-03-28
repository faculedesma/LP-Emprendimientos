import React from 'react';
import TableRow from './TableRow';
import './Table.scss';

const Table = (props) => {
  return (
    <div className="table">
      {
        props.tableType === "TAREAS" 
        ?
          props.content.map(row => {
            return (
              <TableRow 
                key={row.IdTarea}
                row={row}
                tableType={props.tableType}
                handleUpdateTarea={props.updateTarea}
                handleDeleteTarea={props.deleteTarea}
                finishTarea={props.finishTarea}
                unfinishTarea={props.unfinishTarea}
                fetchImagesTarea={props.fetchImagesTarea}
                isCreateForm={props.isCreateForm}
              />
            );
          })
        : 
          props.content.map(row => {
            return (
              <TableRow 
                key={row.IdMaterial}
                row={row}
                tableType={props.tableType}
                handleDeleteMaterial={props.deleteMaterial}
                deliveredMaterial={props.deliveredMaterial}
                pendentMaterial={props.pendentMaterial}
                isAddForm={props.isAddForm}
              />
            );
          })
        }
    </div>
  );
}

export default Table;