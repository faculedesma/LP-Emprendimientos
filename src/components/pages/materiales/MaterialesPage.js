import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Layout from '../../layout/Layout';
import MaterialForm from './MaterialForm';
import Table from '../../common/table/Table';
import { Icon, Drawer, BackTop, Input, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
//import './MaterialesPage.scss';

class MaterialesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materiales: [],
      IdObra: props.location.state.IdObra,
      search: '',
      queryResult: '',
      isLoading: true,
      isVisible: false,
      isAddForm: false
    };
  }

  componentDidMount() {
    this.props.materialesActions.fetchMateriales(this.state.IdObra, '');
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.materiales !== nextProps.materiales) {
      return {
        isLoading: false,
        materiales: nextProps.materiales,
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
      prevProps.materialesActions.fetchMateriales(this.state.IdObra, '');
      this.showNotification();
    }
  };

  addMaterial = (Cantidad, Nota) => {
    this.props.materialesActions.addMaterial(this.state.IdObra, Cantidad, Nota);
    this.onCloseDrawer();
  };

  deleteMaterial = (IdMaterial, IdObra) => this.props.materialesActions.deleteMaterial(IdMaterial, IdObra);

  updateMaterial = material => this.props.materialesActions.updateMaterial(material);

  deliveredMaterial = (IdMaterial, IdObra) => this.props.materialesActions.deliveredMaterial(IdMaterial, IdObra);

  pendentMaterial = (IdMaterial, IdObra) => this.props.materialesActions.pendentMaterial(IdMaterial, IdObra);
  
  handleSearch = () => this.props.materialesActions.fetchMateriales(this.state.IdObra, this.state.search);

  handleSearchField = e => {
    this.setState({
      search: e.target.value
    }, () => {
      this.props.materialesActions.fetchMateriales(this.state.IdObra, this.state.search);
    });
  };

  showNotification = () => {
    this.state.queryResult.substring(0,2) !== 'OK'
    ? notification.error({ description: this.state.queryResult, placement: "bottomRight" })
    : notification.success({ description: this.state.queryResult, placement: "bottomRight" })
  };

  showDrawerCreate = () => {
    this.setState({
      isAddForm: true,
      isVisible: true
    });
  };

  onCloseDrawer= () => {
    this.setState({
      isVisible: false,
      isAddForm: false
    });
  };

  render() {
    return (
      <Layout>
        <div className="tareas-container">
          <div className="tareas-container__header">
            <div>
              <h1>Materiales</h1>
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
                      content={this.state.materiales} 
                      tableType="MATERIALES"
                      openUpdateDrawer={this.showDrawerUpdate}
                      updateMaterial={this.updateMaterial}
                      deleteMaterial={this.deleteMaterial}
                      deliveredMaterial={this.deliveredMaterial}
                      pendentMaterial={this.pendentMaterial}
                      isAddForm={this.state.isAddForm}
                    />
            }
          <Drawer
            placement="right"
            width="100%"
            className="form-drawer"
            closable={true}
            onClose={this.onCloseDrawer}
            visible={this.state.isVisible}
          >
            <MaterialForm 
              isAddForm={this.state.isAddForm} 
              addMaterial={this.addMaterial}
            />
          </Drawer>
          <BackTop className="backtop"/>
        </div>
      </Layout>
    );
  }
}

MaterialesPage.propTypes = {
  // fetchTareas: PropTypes.func,
  // percent: PropTypes.string
};

export default MaterialesPage;