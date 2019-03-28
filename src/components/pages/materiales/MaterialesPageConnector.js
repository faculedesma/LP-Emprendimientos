import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  fetchMateriales,
  addMaterial, 
  deleteMaterial, 
  updateMaterial,
  deliveredMaterial,
  pendentMaterial  
} from '../../../redux/materiales/MaterialesActions';
import MaterialesPage from './MaterialesPage';

const mapDispatchToProps = dispatch => ({
  materialesActions: bindActionCreators( { 
    fetchMateriales, addMaterial, deleteMaterial, updateMaterial, deliveredMaterial, pendentMaterial 
  }, dispatch)
});

const mapStateToProps = state => ({
  materiales: state.materiales.materiales,
  queryResult: state.tareas.queryResult
});

export default connect(mapStateToProps, mapDispatchToProps)(MaterialesPage);
