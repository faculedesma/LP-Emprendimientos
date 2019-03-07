import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import Images from '../common/images/ImagesConnector';

class TareaContent extends Component {
  render() {
    const { tarea } = this.props;
    return (
      <div>
        <div className="tareas-container__table__data">
          <p>Descripción: {tarea.Descripcion}</p>
          <p>Fecha Inicio: {tarea.FechaInicio.substring(0,10)}</p>
          <p>Fecha Fin: {!tarea.FechaFin ? '-' : tarea.FechaFin.substring(0,10)}</p>
          <p>Creada por: {tarea.UsuarioCreacion}</p>
          <p>Estado:
                          {tarea.Estado === "T"
              ? <FontAwesomeIcon icon={faCheck} className="icon-finish" />
              : <FontAwesomeIcon icon={faClock} className="icon-pending" />
            }
          </p>
        </div>
        <div className="tareas-container__table__images">
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <Images IdTarea={tarea.IdTarea}/>
        </div>
      </div>
    );
  }
}

export default TareaContent;