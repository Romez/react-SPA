import React  from 'react';
import PropTypes from 'prop-types'
import Input from '../../components/ui/input';
import { bindAll } from 'lodash';
import './styles.less';
import is from 'is_js';
import { connect } from 'react-redux';
import { submitForm } from './actions';

class ContactPage extends React.Component {
    static path = '/contact';
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['changeName', 'changeEmail', 'submit', '_isFormValid', '_isNameValid', '_isEmailValid']);

        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };
    }

    changeName(name) {
        this.setState({ name });
    }

    changeEmail(email) {
        this.setState({ email });
    }

    submit(event) {
        event.preventDefault();

        if (!this._isFormValid()) return;

        console.log('Name', this.state.name);

        this.props.dispatch(submitForm(this.state.name, this.state.email));
        this.setState({
            name: '', email: ''
        });
    }

    _isFormValid() {
        return this._isNameValid(this.state.name) && this._isEmailValid(this.state.email);
    }

    _isNameValid(name) {
        let errorName = '';

        if (name === '') {
            errorName = 'Стоит заполнить имя';
            this.setState({ errorName });
            return false;
        }

        if (name.length < 3) {
            errorName = 'Длинна поля должна быть больше 3 символов';
            this.setState({ errorName });
        }

        this.setState({ errorName });
        return true;
    }

    _isEmailValid(email) {
        let errorEmail = '';

        if (email === '') {
            errorEmail = 'Стоит заполнить почту';
            this.setState({ errorEmail });
            return false;
        }

        if (!is.email(email)) {
            errorEmail = 'Не верный email';
            this.setState({ errorEmail });
            return false;
        }

        this.setState({ errorEmail });
        return true;
    }

    render() {
        return (
            <div className='row'>
                <div className='col-xs-6'>
                    <form className='b-contact'>
                        <h4>Имя</h4>
                        <Input
                            onChange={ this.changeName }
                            value={ this.state.name }
                            error={ this.state.errorName }
                        />
                        <h4>Email</h4>
                        <Input
                            onChange={ this.changeEmail }
                            value={ this.state.email }
                            error={ this.state.errorEmail }
                        />
                        <button type='submit' className='btn btn-success' onClick={ this.submit }>Сохранить</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactPage);
