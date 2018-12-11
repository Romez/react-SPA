import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import { closeModal } from '../../../components/modal/actions';
import Input from '../../../components/ui/input';

class AddModal extends React.Component {

    static  propTypes = {
        dispatch: PropTypes.func.isRequired,
        onAdd: PropTypes.func.isRequired,
        name: PropTypes.string,
        youtube: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            youtube: '',
            errors: {
                name: '',
                youtube: ''
            }
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'add']);
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    changeName(name) {
        this.setState({ name });
    }

    changeLink(youtube) {
        this.setState({ youtube });
    }

    add() {
        const { name, youtube } = this.state;

        const errorMsg = 'Следует заполнить поле';
        const errors = {
            name: '',
            youtube: ''
        };

        if (name === '') {
            errors.name = errorMsg;
        }

        if (youtube === '') {
            errors.youtube = errorMsg;
        }

        this.setState({errors});
        //
        if ( errors.name || errors.youtube ) {
            return;
        }

        this.props.dispatch( this.props.onAdd({ name, youtube }) );
        this.close();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <Input
                        onChange={ this.changeName }
                        placeholder='Имя'
                        value={ this.state.name }
                        error={ this.state.errors.name }
                    />
                    <Input
                        onChange={ this.changeLink }
                        value={ this.state.youtube }
                        error={ this.state.errors.youtube }
                        placeholder='URL'
                    />
                </div>
                <div className='modal-footer'>
                    <button onClick={ this.close } className='btn btn-default'>Закрыть</button>
                    <button onClick={ this.add } className='btn btn-success'>Сохранить</button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AddModal);
