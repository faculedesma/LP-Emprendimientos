import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import TareaForm from './TareaForm';
import Table from '../common/table/Table';
import { Progress, Icon, Drawer, BackTop, Input, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import './Tareas.scss';

class Tareas extends Component {
  state = {
    loading: true,
    visible: false,
    tareas: [],
    search: '',
    queryResult: '',
    isCreateForm: true
  };

  componentDidMount() {
    this.props.tareasActions.fetchTareas('');
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if(prevState.tareas !== nextProps.tareas) {
  //     return {
  //       loading: false,
  //       tareas: nextProps.tareas
  //     };
  //   }

  //   if (!prevState.queryResult && nextProps.queryResult) {
  //     //this.props.tareasActions.fetchTareas('');
  //     return {
  //       queryResult: nextProps.queryResult
  //     }, () => {
  //       this.state.queryResult.substring(0,2) !== 'OK'
  //         ? notification.error({ description: this.state.queryResult, placement: "bottomRight" })
  //         : notification.success({ description: this.state.queryResult, placement: "bottomRight" })
  //     };
  //   }

  //   return null;
  // };

  componentWillReceiveProps(nextProps) {
    if(this.props.tareas !== nextProps.tareas) {
      this.setState({
        loading: false,
        tareas: nextProps.tareas
      });
    }

    if (!this.props.queryResult && nextProps.queryResult) {
      this.props.tareasActions.fetchTareas('');
      this.setState({
        queryResult: nextProps.queryResult
      }, () => {
        this.state.queryResult.substring(0,2) !== 'OK'
          ? notification.error({ description: this.state.queryResult, placement: "bottomRight" })
          : notification.success({ description: this.state.queryResult, placement: "bottomRight" })
      });
    }
  };

  createTarea = (titulo, descripcion) => {
    this.props.tareasActions.createTarea(titulo, descripcion);
    this.onCloseDrawer();
  };

  deleteTarea = IdTarea => {
    this.props.tareasActions.deleteTarea(IdTarea);
  };

  updateTarea = (titulo, descripcion) => {
    this.props.tareasActions.createTarea(titulo, descripcion);
    this.onCloseDrawer();
  };

  refreshTareas = () => {
    this.props.tareasActions.fetchTareas('');
  };
  
  handleSearch = () => {
    this.props.tareasActions.fetchTareas(this.state.search);
  };

  handleSearchField = e => {
    this.setState({
      search: e.target.value
    }, () => {
      this.props.tareasActions.fetchTareas(this.state.search);
    });
  };

  showDrawerCreate = () => {
    this.setState({
      isCreateForm: true,
      visible: true
    });
  };

  showDrawerUpdate = () => {
    this.setState({
      isCreateForm: false,
      visible: true
    });
  };

  onCloseDrawer= () => {
    this.setState({
      visible: false,
    });
  };

  calculatePercentage = () => {
    let finishCount = 0;
    let totalCount = 0;
    this.props.tareas.filter(tarea => {
      totalCount += 1;
      tarea.Estado === "T" ? finishCount += 1 : null;
    });
    return Math.trunc((finishCount / totalCount) * 100);
  };

  render() {
    return (
      <div className="tareas-container">
        <div className="tareas-container__header">
          <div>
            <h1>Tareas</h1>
          </div>
          <div className="tareas-container__header__actions">
            <button onClick={this.refreshTareas}>
              <FontAwesomeIcon icon={faRedo} className="icon-plus" />
            </button>
            <button onClick={this.showDrawerCreate}>
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            </button>
          </div>
        </div>
        <div className="tareas-container__searchbar">
          <button>
            <FontAwesomeIcon 
              icon={faSearch} 
              className="icon-plus" 
              onClick={this.handleSearch}
            />
          </button>
          <Input
            value={this.state.search}
            placeholder="Filtrar"
            onChange={this.handleSearchField}
          />
        </div>
          {
            this.state.loading
              ? <Icon type="loading" className="spinner"/>
                :
                  <Table 
                    content={this.state.tareas} 
                    tableType={this.props.tableType}
                    openUpdateDrawer={this.showDrawerUpdate}
                  />
          }
        <div className="tareas-container__stadistics">
          <p>Porcentaje tareas realizadas:</p>
          <Progress
            type="dashboard"
            percent={this.calculatePercentage()} 
          />
        </div>
        <Drawer
          placement="right"
          width="100%"
          className="form-drawer"
          closable={true}
          onClose={this.onCloseDrawer}
          visible={this.state.visible}
        >
          <TareaForm 
            isCreateForm={this.state.isCreateForm} 
            createTarea={this.createTarea}
            updateTarea={this.updateTarea}
          />
        </Drawer>
        <BackTop className="backtop"/>
      </div>
    );
  }
}

Tareas.propTypes = {
  fetchTareas: PropTypes.func,
  percent: PropTypes.string
};

export default Tareas;