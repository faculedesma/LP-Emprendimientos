import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadTareas from '../../redux/tareas/TareasActions';
import Tareas from './Tareas';

const mapDispatchToProps = dispatch => ({
  tareasActions: bindActionCreators( { loadTareas }, dispatch)
});

const mapStateToProps = (state, ownProps) => ({
  tareas: state.tareas.tareas
});

export default connect(mapStateToProps, mapDispatchToProps)(Tareas);
