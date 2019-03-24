import React, { Component } from 'react';
import Layout from '../../layout/Layout';
import ObraContent from './ObraContent';
import { Select } from 'antd';
import './ObrasPage.scss';

const Option = Select.Option;

class ObrasPage extends Component {
  state = {
    obras: [],
    idObraSelected: "",
    direccionObraSelected: ""
  }

  componentDidMount = () => {
    this.props.obrasActions.fetchObras();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.obras !== nextProps.obras) {
      return {
        obras: nextProps.obras
      };
    }

    return null;
  }

  handleDropdown = (IdObra, title) => {
    this.setState({
      idObraSelected: IdObra,
      direccionObraSelected: title.props.children
    })
  }
  
  render() {
    return(
      <Layout 
        IdObra={this.state.idObraSelected} 
        direccionObra={this.state.direccionObraSelected}
      >
        <div  className="obras-page">
          <Select 
            placeholder="Seleccione la Obra"
            onChange={this.handleDropdown}
          >
            {
              this.state.obras.map(obra => {
                return <Option key={obra.IdObra}>{obra.Direccion}</Option>
              })
            }
          </Select>
          {
            this.state.idObraSelected 
              ? this.state.obras.map((obra, index) => {
                if((index+1).toString() === this.state.idObraSelected) 
                  return <ObraContent obra={obra} />
                else return null;
                })
              : null
          }
        </div>
      </Layout>
    )
  } 
};

export default ObrasPage;