import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Input extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        placeholder: PropTypes.string,
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
            'has-error': this.props.error ? true : false
        });

        const { value, placeholder } = this.props;

        return (
            <div className={ divClasses }>
                <input
                    type='text'
                    value={ value }
                    onChange={ this.handleChange }
                    className='form-control'
                    placeholder={ placeholder }
                />
                { this.props.error ? <span className='help-block'>{ this.props.error }</span> : null }
            </div>
        );
    }
}
