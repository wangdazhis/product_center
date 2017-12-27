import React from 'react';
require('./../styles/home.less');
import Navrouter from './../component/Navrouter';
class Home extends React.Component{
    render () {
        return (
            <div className="home">
                <Navrouter />
            </div>
        )
    }
}
export default {
    path: '/home',
    component: Home,
    name: 'home'
}