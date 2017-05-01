import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addText } from './actions';
import Textarea from '../../components/ui/textarea/index';

import './styles.less';

class ContactPage extends React.Component {
    static path = '/contact';
    static propTypes = {
        contact: PropTypes.object,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            info: '',
            value: '',
            error: ''
        };

        bindAll(this, ['inputOnChange', 'addText']);
    }

    addText() {
        const { value } = this.state;

        this.props.dispatch( addText(value) );

        this.setState({ value: '' });
    }

    inputOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value} = this.state;
        const { info, error } = this.props.contact;

        return (
            <div className='row-fluid b-contact'>
                <div className='col-xs-12'>
                    <div className='col-xs-4'>
                        <div className='b-contact--info'>{ info }</div>
                        <Textarea
                            value={ value }
                            onChange={ this.inputOnChange }
                            error={ error }
                        />
                        <button onClick={ this.addText } className='btn btn-primary b-contact--add-btn'>Add text
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contact: state.contact
    };
}

export default connect(mapStateToProps)(ContactPage);
