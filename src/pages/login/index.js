import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, InputBox, Button } from './style'
import { actionCreators } from './store'

class Login extends React.PureComponent {
    render() {
        return (
            this.props.isLogin ? 
            <Redirect to='/'/>:
            <LoginWrapper>
                <LoginBox>
                   <InputBox placeholder='账号' innerRef={input => {this.account = input}} />
                   <InputBox placeholder='密码' type='password' innerRef={input => {this.password = input}} />
                   <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = state => ({
   isLogin: state.getIn(['login', 'login'])
})

const mapDispatchToProps = dispatch => ({
   login(account, password) {
       dispatch(actionCreators.login(account.value, password.value))
   }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)