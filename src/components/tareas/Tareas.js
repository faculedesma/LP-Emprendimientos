import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Tareas.scss';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class Tareas extends Component {
  state = {
    tareas: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }
  
  render() {
    return (
      <div className="tareas-container">
        <div className="tareas-container__header">
          <h1>Tareas</h1>
          <FontAwesomeIcon icon={faPlus} className="icon-plus" />
        </div>
        <Collapse className="tareas-container__table" defaultActiveKey={['1']} onChange={callback}>
          {
            // this.state.tareas.map(tarea => {
            //   <Panel showArrow={false} header={ tarea.Titulo } key={ tarea.IdTarea }>
            //     <div className="tareas-container__table__data">
            //       <p>{ tarea.Descripcion }</p>
            //       <p>{ tarea.FechaInicio }</p>
            //       <p>{ tarea.FechaFin }</p>
            //       <p>Estado: <FontAwesomeIcon icon={faClock} className="icon-pending" /></p>
            //     </div>
            //     <div className="tareas-container__table__images">

            //     </div>
            //   </Panel>
            // })
          }
        </Collapse>
        <div className="tareas-container__stadistics">
          <p>Porcentaje tareas realizadas:</p>
          <Progress type="dashboard" percent={50} />
        </div>
      </div>
    );
  }
}

export default Tareas;