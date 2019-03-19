import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Layout from '../../layout/Layout';
import TareaForm from './TareaForm';
import Table from '../../common/table/Table';
import { Progress, Icon, Drawer, BackTop, Input, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './TareasPage.scss';

class Tareas extends Component {
  state = {
    tareas: [],
    search: '',
    queryResult: '',
    isLoading: true,
    isVisible: false,
    isCreateForm: false
  };

  componentDidMount() {
    this.props.tareasActions.fetchTareas('');
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.tareas !== nextProps.tareas) {
      return {
        isLoading: false,
        tareas: nextProps.tareas,
        queryResult: ''
      };
    }

    if (!prevState.queryResult && nextProps.queryResult) {
      return {
        queryResult: nextProps.queryResult
      };
    }

    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.queryResult && this.state.queryResult){
      prevProps.tareasActions.fetchTareas('');
      this.showNotification();
    }
  };

  createTarea = (Titulo, Descripcion) => {
    this.props.tareasActions.createTarea(Titulo, Descripcion);
    this.onCloseDrawer();
  };

  deleteTarea = IdTarea => this.props.tareasActions.deleteTarea(IdTarea);

  updateTarea = tarea => this.props.tareasActions.updateTarea(tarea);

  unfinishTarea = IdTarea => this.props.tareasActions.unfinishTarea(IdTarea);

  finishTarea = IdTarea => this.props.tareasActions.finishTarea(IdTarea);

  fetchImagesTarea = IdTarea => this.props.tareasActions.fetchImagesTarea(IdTarea);
  
  handleSearch = () => this.props.tareasActions.fetchTareas(this.state.search);

  handleSearchField = e => {
    this.setState({
      search: e.target.value
    }, () => {
      this.props.tareasActions.fetchTareas(this.state.search);
    });
  };

  showNotification = () => {
    this.state.queryResult.substring(0,2) !== 'OK'
    ? notification.error({ description: this.state.queryResult, placement: "bottomRight" })
    : notification.success({ description: this.state.queryResult, placement: "bottomRight" })
  };

  showDrawerCreate = () => {
    this.setState({
      isCreateForm: true,
      isVisible: true
    });
  };

  onCloseDrawer= () => {
    this.setState({
      isVisible: false,
      isCreateForm: false
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
      <Layout>
        <div className="tareas-container">
          <div className="tareas-container__header">
            <div>
              <h1>Tareas</h1>
            </div>
            <div className="tareas-container__header__actions">
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
              this.state.isLoading
                ? <Icon type="loading" className="spinner"/>
                  :
                    <Table 
                      content={this.state.tareas} 
                      tableType={this.props.tableType}
                      openUpdateDrawer={this.showDrawerUpdate}
                      updateTarea={this.updateTarea}
                      deleteTarea={this.deleteTarea}
                      finishTarea={this.finishTarea}
                      unfinishTarea={this.unfinishTarea}
                      fetchImagesTarea={this.fetchImagesTarea}
                      isCreateForm={this.state.isCreateForm}
                    />
            }
          <div className="tareas-container__stadistics">
            <p>Porcentaje tareas realizadas:</p>
            <Progress
              type="circle"
              percent={this.calculatePercentage()} 
            />
          </div>
          <Drawer
            placement="right"
            width="100%"
            className="form-drawer"
            closable={true}
            onClose={this.onCloseDrawer}
            visible={this.state.isVisible}
          >
            <TareaForm 
              isCreateForm={this.state.isCreateForm} 
              createTarea={this.createTarea}
            />
          </Drawer>
          <BackTop className="backtop"/>
        </div>
      </Layout>
    );
  }
}

Tareas.propTypes = {
  fetchTareas: PropTypes.func,
  percent: PropTypes.string
};

export default Tareas;