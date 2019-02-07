import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as obrasActions from '../../redux/obras/ObrasActions';

function mapStateToProps() {
  
};

function mapDispatchToProps(dispatch) {
  return {
    obrasActions: bindActionCreators(obrasActions, dispatch)
  };
}