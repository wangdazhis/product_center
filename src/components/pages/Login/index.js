import React from 'react';

const Login = React.createClass({
    render () {
        return (
            <div className="login">
                登录页
            </div>
        )
    }
})

export default {
    path: '/login',
    component: Login,
    name: 'login'
}