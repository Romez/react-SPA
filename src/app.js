import React from 'react';
import PropTypes from 'prop-types';
import { DevTools } from './utils/index';
import { Header } from './components/index';

export default class App extends React.Component {
    static path = '/';

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <div>
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
