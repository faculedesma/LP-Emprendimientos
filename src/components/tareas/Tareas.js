import React, { Component } from 'react';
import TareaHeader from './TareaHeader';
import TareaData from './TareaData';
import TareaForm from './TareaForm'; 
import CustomModal from '../common/customModal/CustomModal';
import { Collapse, Progress, Spin, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Tareas.scss';

const Panel = Collapse.Panel;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Tareas extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.tareasActions.loadTareas();
    this.setState({
      loading: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.result != nextProps.result) {
      nextProps.tareasActions.loadTareas();
    }
  };

  newTarea = (titulo, descripcion) => {
    this.props.tareasActions.newTarea(titulo, descripcion);
  };

  calculatePercentage = () => {
    let finishCount = 0;
    let totalCount = 0;
    this.props.tareas.filter(tarea => {
      totalCount += 1;
      if (tarea.Estado === "T") finishCount += 1;
    });
    return (finishCount / totalCount) * 100;
  };

  render() {
    const {
      tareas
    } = this.props;

    return (
      <div className="tareas-container">
        <div className="tareas-container__header">
          <h1>Tareas</h1>
          <button>
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
          </button>
        </div>
        {
          this.state.loading
            ? <Spin indicator={antIcon} />
            :
            <Collapse className="tareas-container__table">
              {
                tareas.map(tarea => {
                  return (
                    <Panel
                      showArrow={false}
                      header={<TareaHeader tarea={tarea} />}
                      key={tarea.IdTarea}
                    >
                      <TareaData tarea={tarea} />
                    </Panel>
                  )
                })
              }
            </Collapse>
        }
        {/* <div className="tareas-container__stadistics">
          <p>Porcentaje tareas realizadas:</p>
          <Progress
            type="dashboard"
            percent={this.calculatePercentage()} />
        </div> */}
        <TareaForm 
          newTarea={this.newTarea}
        />
        {/* <CustomModal
          title="Nueva Tarea"
          content={<TareaForm />}
        /> */}
      </div>
    );
  }
}

export default Tareas;