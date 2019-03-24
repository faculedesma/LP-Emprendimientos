import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchObras } from '../../../redux/obras/ObrasActions';
import ObrasPage from './ObrasPage';

const mapDispatchToProps = dispatch => ({
  obrasActions: bindActionCreators( { fetchObras }, dispatch)
});

const mapStateToProps = state => ({
  obras: state.obras.obras
});

export default connect(mapStateToProps, mapDispatchToProps)(ObrasPage);
