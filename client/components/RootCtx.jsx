import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const RootCtx = React.createClass({
    propTypes: {
        inputValue: PropTypes.string
    },
    render() {
        return (
            <div>Kalle inputValue: { inputValue }</div>
        );
    }
});

function stateToProps(state) {
    console.log('state: ', state);
    return {
        inputValue: state.inputValue
    };
}

export default connect(stateToProps)(RootCtx);
