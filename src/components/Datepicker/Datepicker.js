import React, { Component } from 'react';
import { DateRangePicker }  from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    return this.props.onChange([{
      name: 'startDate',
      value: startDate
    }, {
      name: 'endDate',
      value: endDate
    }]);
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const {
      focusedInput
    } = this.state;

    const {
      startDate,
      endDate
    } = this.props;

    return (
      <DateRangePicker
        onDatesChange = { this.onDatesChange }
        onFocusChange = { this.onFocusChange }
        focusedInput  = { focusedInput }
        startDate     = { startDate }
        endDate       = { endDate }
        withPortal
        hideKeyboardShortcutsPanel />
    );
  }
}


export default Datepicker;
