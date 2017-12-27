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
            userPwd: '',
            warningName: '账户错误',
            warnNameShow: 'warn',
            warningPwd: '密码错误',
            warnPwdShow: 'warn'
        }
    }
    focused (cur) { // cur: 当前获取焦点的输入框用于区分账户输入和密码输入
        if (cur === 'userName') {
            this.setState({
                userNameFocus: true,
                userNameFlag: true,
                warnNameShow: 'warn'
            })
        } else {
            this.setState({
                userPwdFocus: true,
                userPwdFlag: true,
                warnPwdShow: 'warn'
            })
        }
    }
    blured (cur) { // cur: 当前失去焦点的输入框用于区分账户输入和密码输入
        
        if (cur === 'userName') {
            var value = this.refs.userName.value
            if (value === '') {
                this.setState({
                    userNameFlag: false,
                    userNameFocus: false,
                    warningName: '账户不能为空',
                    warnNameShow: 'warn warning'
                })
            } else if (value.length < 6) {
                this.setState({
                    userNameFlag: false,
                    userNameFocus: true,
                    warningName: '账户格式不正确',
                    warnNameShow: 'warn warning'
                })
            } else {
                this.setState({
                    userNameFlag: true,
                    userNameFocus: true,
                    warnNameShow: 'warn'
                })
            }
        } else {
            var value = this.refs.userPwd.value
            if (value === '') {
                this.setState({
                    userPwdFlag: false,
                    userPwdFocus: false,
                    warningPwd: '密码不能为空',
                    warnPwdShow: 'warn warning'
                })
            } else if (value.length < 8) {
                this.setState({
                    userPwdFlag: false,
                    userPwdFocus: true,
                    warningPwd: '密码格式不正确',
                    warnPwdShow: 'warn warning'
                })
            } else {
                this.setState({
                    userPwdFlag: true,
                    userPwdFocus: true,
                    warnPwdShow: 'warn'
                })
            }
        }
    }
    nextJemp () {
        this.props.history.push('/home')
    }
    render () {
        return (
            <div className="login">
                <div className="boxAlert">
                    <h3>用户登录</h3>
                    <div>
                        {this.state.userNameFocus ? <span className={this.state.userNameFlag ? 'position blured' : 'position blured warnColor'}>账户</span> : <span className={this.state.userNameFlag ? 'position' : 'position warnColor'}>账户</span>}
                        <input type="text" id="userName" ref="userName" onBlur={this.blured.bind(this, 'userName')} onFocus={this.focused.bind(this, 'userName')}/>
                        {this.state.userNameFocus ? <span className="selectedSuccess selected"></span> : <span className="selectedSuccess"></span>}
                        {this.state.userNameFlag ? <span className="selectedError"></span> : <span className="selectedError selected"></span>}
                        <span className={this.state.warnNameShow}>{this.state.warningName}</span>
                    </div>
                    <div>
                        {this.state.userPwdFocus ? <span className={this.state.userPwdFlag ? 'position blured' : 'position blured warnColor'}>密码</span> : <span className={this.state.userPwdFlag ? 'position' : 'position warnColor'}>密码</span>}
                        <input type="password" id="userPwd" ref="userPwd" onBlur={this.blured.bind(this, 'userPwd')} onFocus={this.focused.bind(this, 'userPwd')}/>
                        {this.state.userPwdFocus ? <span className="selectedSuccess selected"></span> : <span className="selectedSuccess"></span>}
                        {this.state.userPwdFlag ? <span className="selectedError"></span> : <span className="selectedError selected"></span>}
                        <span className={this.state.warnPwdShow}>{this.state.warningPwd}</span>
                    </div>
                    <button id="submit" onClick={this.nextJemp.bind(this)} disabled={this.state.userNameFlag && this.state.userPwdFlag ? false : true}>立即登录</button>
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