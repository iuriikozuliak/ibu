// There is no good reason to use your own implementation of
// redux-form in the real world project. However, it's quite
// challenging and interesting problem to solve, especially after you've been
// working with a few different versions of it for quite a while.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  initForm,
  setValue
} from 'modules/forms';

const withForm = (Wrapped, options) => {
  class Form extends Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
      const { initForm } = this.props;
      const {
        id,
        initialValues
      } = options;

      initForm({
        id,
        initialValues
      });
    }
    handleChange({ currentTarget: { name, value } }) {
      const {
        setValue
      } = this.props;

      setValue({
        id: options.id,
        name,
        value
      });
    }
    render() {
      const {
        form: {
          initialValues,
          values
        }
      } = this.props;

      return (
        <Wrapped
          onChange = { this.handleChange }
          values   = { values || initialValues || {} } />
      );
    }
  }

  return connect(state => ({
    form: state.forms[options.id] || {}
  }), { initForm, setValue })(Form);
};

export default withForm;
