import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

const TareaData = ({ tarea }) => {
  return (
    <div>
      <div className="tareas-container__table__data">
        <p>Descripción: {tarea.Descripcion}</p>
        <p>Fecha Inicio: {tarea.FechaInicio.substring(0,10)}</p>
        <p>Fecha Fin: {tarea.FechaFin === null ? '-' : tarea.FechaFin.substring(0,10)}</p>
        <p>Creada por: {tarea.UsuarioCreacion}</p>
        <p>Estado:
                        {tarea.Estado === "T"
            ? <FontAwesomeIcon icon={faClock} className="icon-pending" />
            : <FontAwesomeIcon icon={faCheck} className="icon-finish" />
          }
        </p>
      </div>
      <div className="tareas-container__table__images">

      </div>
    </div>
  );
}

export default TareaData;