import React from 'react';
require('./../styles/login.less')
class Login extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            userNameFlag: true, // 验证用户名是否正确
            userPwdFlag: true, // 验证密码是否正确
            userNameFocus: false, // 账户输入框是否获取焦点
            userPwdFocus: false, // 账户密码框是否获取焦点
            userName: '',
            userPwd: ''
        }
    }
    focused (cur) { // cur: 当前获取焦点的输入框用于区分账户输入和密码输入
        if (cur === 'userName') {
            this.setState({
                userNameFocus: true
            })
        } else {
            this.setState({
                userPwdFocus: true
            })
        }
    }
    blured (cur) {// cur: 当前失去焦点的输入框用于区分账户输入和密码输入
       
        if (cur === 'userName') {
            var value = this.refs.userName.value
            if (value === "" || value.length != 6) {
                this.setState({
                    userNameFlag: false
                })
            } else {
                this.setState({
                    userNameFocus: false
                })
            }
        } else {
            var value = this.refs.userPwd.value
            if (value === '' || value.length < 8) {
                this.setState({
                    userPwdFlag: false
                })
            } else {
                this.setState({
                    userPwdFocus: false
                })
            }
        }
    }
    render () {
        return (
            <div className="login">
                <div className="boxAlert">
                    <h3>用户登录</h3>
                    <div>
                        {this.state.userNameFocus ? <span className="position blured">账户</span> : <span className="position">账户</span>}
                        <input type="text" id="userName" ref="userName" onBlur={this.blured.bind(this, 'userName')} onFocus={this.focused.bind(this, 'userName')}/>
                        {this.state.userNameFocus ? <span className="selectedSuccess selected"></span> : <span className="selectedSuccess"></span>}
                        {this.state.userNameFlag ? <span className="selectedError"></span> : <span className="selectedError blured"></span>}
                    </div>
                    <div>
                        {this.state.userPwdFocus ? <span className="position blured">密码</span> : <span className="position">密码</span>}
                        <input type="text" id="userPwd" ref="userPwd" onBlur={this.blured.bind(this, 'userPwd')} onFocus={this.focused.bind(this, 'userPwd')}/>
                        {this.state.userPwdFocus ? <span className="selectedSuccess selected"></span> : <span className="selectedSuccess"></span>}
                        {this.state.userPwdFlag ? <span className="selectedError"></span> : <span className="selectedError blured"></span>}
                    </div>
                    <button id="submit">立即登录</button>
                </div>
            </div>
        )
    }
}

export default {
    path: '/login',
    component: Login,
    name: 'login'
}