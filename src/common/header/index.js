import React, {Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false,
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur= this.handleInputBlur.bind(this)
    }
   
    handleInputFocus() {
        this.setState({
            focus: true,
        })
    }

    handleInputBlur() {
        this.setState({
            focus: false,
        })
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                <CSSTransition
                  timeout = {200}
                  in={this.state.focus}
                  classNames="slide"
                >
                    <NavSearch 
                    className={this.state.focus ? "focus" : ""} 
                    onFocus={this.handleInputFocus} 
                    onBlur={this.handleInputBlur} 
                    />
                </CSSTransition>
                <i className={this.state.focus ? "focus iconfont" : "iconfont"}>&#xe614;</i>
                </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}