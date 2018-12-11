import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash';
import { connect } from 'react-redux';
import ListItem from './list-item';
import { addItem } from './actions';
import { openModal } from '../../components/modal';
import AddModal from './modals/add-modal';


class ListPage extends React.Component {
    static path = '/list';

    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['renderItems']);

        this.add = this.add.bind(this);
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key={ idx }
                id={ item.id }
                name={ item.name }
                youtube={ item.youtube }
            />
        );
    }

    add() {
        this.props.dispatch( openModal({
            content: <AddModal
                onAdd={ addItem }
            />,
            title: 'Добавить'
        }) );
    }

    render() {
        const { items } = this.props.list;

        return (
            <div className='row'>
                <div className='col-xs-12'>
                    <h3>List</h3>

                    <button onClick={ this.add } className='btn btn-primary btn-add'>Добавить</button>

                    <table className='table table-bordered table-hover'>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            { items.map(this.renderItems) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);
