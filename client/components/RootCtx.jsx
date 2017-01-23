import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const RootCtx = React.createClass({
    propTypes: {
        inputValue: PropTypes.string
    },
    render() {
        return (
            <div>Kalle</div>
        );
    }
});

function stateToProps(state) {
    console.log('state: ', state);
    return {
    };
}

export default connect(stateToProps)(RootCtx);
