import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to='/'>Brand</Link>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='error-page'>Error page</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
