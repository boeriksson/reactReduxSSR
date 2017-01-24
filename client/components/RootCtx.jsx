import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const RootCtx = React.createClass({
    propTypes: {
        inputValue: PropTypes.string
    },
    render() {
        return (
            <div>Kalle
                <div>
                    <h1>Go to subRoute</h1>
                    <ul role="nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
});

function stateToProps(state) {
    console.log('state: ', state);
    return {
    };
}

export default connect(stateToProps)(RootCtx);
