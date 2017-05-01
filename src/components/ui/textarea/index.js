import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Textarea extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { value } = this.props;
        this.state = { value };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.props.onChange(value);
        this.setState({ value });
    }

    render() {
        const divClasses = classnames({
            'form-group': true,
            'has-error': !!this.props.error
        });

        const { value } = this.props;

        return (
            <div className={ divClasses }>
                <textarea
                    cols='50' rows='10'
                    type='text'
                    value={ value }
                    onChange={ this.handleChange }
                    className='form-control b-contact--text-field'
                />
                { this.props.error ? <span className='help-block'>{ this.props.error }</span> : null }
            </div>
        );
    }
}
