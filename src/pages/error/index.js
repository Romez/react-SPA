import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';


export default class ErrorPage extends React.Component {

    $data = $.ajax({
        url: 'http://localhost:3000/index.php',
        async: true,
        crossDomain: true,
        method: 'GET',
        beforeSend: function() {
            console.log('load');
        },
        success: function(data) {
            console.log(data);
        }
    });
    
    render() {
        return (
            <div className='alert alert-danger'>
                <h3>Страница не найдена</h3>
                <p>Перейти на <Link to='/'>главную</Link></p>
            </div>
        );
    }
}
