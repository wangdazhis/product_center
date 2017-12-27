import React from 'react';

class Home extends React.Component{
    render () {
        return (
            <div className="home">
                home
            </div>
        )
    }
}
export default {
    path: '/home',
    component: Home,
    name: 'home'
}