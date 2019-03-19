import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../components/pages/login/LoginPage';
import HomePage from '../components/pages/home/HomePage';
import TareasPage from '../components/pages/tareas/TareasConnector';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/" component={LoginPage}/> */}
          <Route path="/home" component={HomePage}/>
          <Route path="/tareas" component={TareasPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
