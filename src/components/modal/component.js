import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from './actions';
import './styles.less';

class Modal extends React.Component {

    static  propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    render() {
        const { isOpen, title, content } = this.props.modal;

        if (!isOpen) return null;

        return (
            <div className='modal fade in'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button onClick={ this.close } type='button' className='close'><span aria-hidden='true'>&times;</span></button>
                            <h4 className='modal-title'>{ title }</h4>
                        </div>

                        { content }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);
