import React from 'react';
import { Popover, Popconfirm } from  'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencilAlt, 
  faTrashAlt, 
  faEllipsisH,
  faCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const MaterialContent = ({ row, onRowClick, expandRow, showDrawerUpdate, handleDeleteMaterial, deliveredMaterial, pendentMaterial }) => {
  const actions = (
    <div className="icon-actions">
      <button onClick={showDrawerUpdate}>
        <FontAwesomeIcon icon={faPencilAlt} className="icon-normal" />
      </button>
      <Popconfirm 
        title="Esta seguro de que desea eliminar la tarea?" 
        onConfirm={() => handleDeleteMaterial(row.IdObra, row.IdMaterial)}
        okText="SI" 
        cancelText="NO"
      >
        <button>
          <FontAwesomeIcon icon={faTrashAlt} className="icon-normal" />
        </button>
      </Popconfirm>
      {
        row.Estado === "P"
          ? <FontAwesomeIcon onClick={() => deliveredMaterial(row.IdObra, row.IdMaterial)}icon={faCheck} className="icon-normal" />
          : <FontAwesomeIcon onClick={() => pendentMaterial(row.IdObra, row.IdMaterial)} icon={faClock} className="icon-normal" />
      }
    </div>
  );

  return (
    <div>
      <div className="row">
        <div onClick={onRowClick}>
          <p>{row.Material}</p>
        </div>
        <div>
          <Popover placement="left" content={actions} trigger="click">
            <FontAwesomeIcon icon={faEllipsisH} className="icon-normal" />
          </Popover>
        </div>
      </div>
      <div className={expandRow ? "row-content" : "row-content hidden"}>
        <p><b>Cantidad:</b> {row.Cantidad}</p>
        <p><b>Fecha Pedido:</b> {row.FechaPedido.substring(0,10)}</p>
        <p><b>Fecha Entrega:</b> {!row.FechaEntrega ? "-" : row.FechaEntrega.substring(0,10)}</p>
        <p><b>Creada por:</b> {row.UsuarioPedido}</p>
        <p><b>Estado:</b> 
          { 
            row.Estado === "T"
              ? <FontAwesomeIcon icon={faCheck} className="icon-finish" />
                : <FontAwesomeIcon icon={faClock} className="icon-pending" />
          }
        </p>
      </div>
    </div>
  )
}

export default MaterialContent;
