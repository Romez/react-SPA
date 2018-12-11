import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components';
import { Modal } from './components/modal';
import { TopAlert } from './components/top-alert';

export default class App extends React.Component {
    static path = '/';

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <div className='container-fluid'>
                <Modal />
                <TopAlert />
                <Header />
                { this.props.children }
            </div>
        );
    }
}
