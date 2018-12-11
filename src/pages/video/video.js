import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bindAll from 'lodash';
import './styles.less';

class VideoPage extends React.Component {
    static path = '/video';

    static propTypes = {
        video: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

        };

        bindAll(this, ['bindAll']);
    }

    renderItems(item, i) {
        return (
            <li key={i}>
                <iframe
                    title={i}
                    src={`https://www.youtube.com/embed/${ item.youtube }`}
                    frameBorder='0'
                    allowFullScreen
                />
                <p>{ item.name }</p>
            </li>
        );
    }

    render() {
        const { items } = this.props.video;

        return (
            <div>
                <h3>Video</h3>

                <div className='b-video'>
                    <ul className='list'>
                        { items.map( this.renderItems ) }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        video: state.video
    };
}

export default connect(mapStateToProps)(VideoPage);
