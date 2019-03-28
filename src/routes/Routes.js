import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../components/pages/login/LoginPage';
import ObrasPage from '../components/pages/obras/ObrasPageConnector';
import TareasPage from '../components/pages/tareas/TareasConnector';
import MaterialesPage from '../components/pages/materiales/MaterialesPageConnector';
import ReunionesPage from '../components/pages/reuniones/ReunionesPage';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/" component={LoginPage}/> */}
          <Route path="/obras" component={ObrasPage}/>
          <Route path="/tareas" component={TareasPage}/>
          <Route path="/materiales" component={MaterialesPage}/>
          <Route path="/reuniones" component={ReunionesPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
