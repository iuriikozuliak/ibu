// There is no good reason to use your own implementation of
// redux-form in the real world project. However, it's quite
// challenging and interesting problem to solve, especially after you've been
// working with a few different versions of it for quite a while.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  initForm,
  setValue,
  setError
} from 'modules/forms';
import {
  getErrors
} from 'utils/validation';

const withForm = (Wrapped, options) => {
  class Form extends Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleArrayChange = this.handleArrayChange.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
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
    handleArrayChange(fields) {
      const { id } = options;
      const { setValue } = this.props;

      fields.map(v => setValue({ id, ...v }));
    }
    handleFieldChange(field) {
      const {
        id,
        validate
      } = options;
      const {
        name,
        value
      } = field;
      const {
        setValue,
        setError
      } = this.props;

      setValue({ id, name, value });

      if (validate[name]) {
        const error = getErrors(validate[name], value);

        setError({ id, name, error });
      }
    }
    handleChange(e) {
      if (Array.isArray(e)) {
        this.handleArrayChange(e);
      }
      if (e.currentTarget) {
        this.handleFieldChange(e.currentTarget);
      }
    }
    render() {
      const {
        form: {
          initialValues,
          values,
          errors
        }
      } = this.props;

      return (
        <Wrapped
          onChange = { this.handleChange }
          values   = { values || initialValues || {} }
          errors   = { errors || {} } />
      );
    }
  }

  return connect(state => ({
    form: state.forms[options.id] || {}
  }), { initForm, setValue, setError })(Form);
};

export default withForm;
