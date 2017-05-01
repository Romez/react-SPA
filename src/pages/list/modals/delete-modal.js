import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import { closeModal } from '../../../components/modal/actions';

class DeleteModal extends React.Component {
    static  propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSuccess: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['cancel', 'deleteItem']);
    }

    cancel() {
        this.props.dispatch( closeModal() );
    }

    deleteItem() {
        this.props.dispatch( this.props.onSuccess(this.props.id) );
        this.cancel();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID:</b> { this.props.id }</p>
                    <p><b>Name:</b> { this.props.name }</p>

                </div>
                <div className='modal-footer'>
                    <button onClick={ this.cancel } className='btn btn-default'>Отмена</button>
                    <button onClick={ this.deleteItem } className='btn btn-danger'>Удалить</button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);
