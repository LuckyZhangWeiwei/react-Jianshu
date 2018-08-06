import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

const getListArea = (show) => {
     return show ? (
        <SearchInfo>
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
           </SearchInfoList>
      </SearchInfo> 
     ) : null
}

const Header = (props) => {
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
                  in={props.focus}
                  classNames="slide"
                >
                    <NavSearch 
                    className={props.focus ? "focus" : ""} 
                    onFocus={props.handleInputFocus} 
                    onBlur={props.handleInputBlur} 
                    />
                </CSSTransition>
                 <i className={props.focus ? "focus iconfont" : "iconfont"}>&#xe614;</i>
                 {getListArea(props.focus)}
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

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(['header', 'focus'])
        // focus: state.get('header').get('focus'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
           dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
           dispatch(actionCreators.searchBlur())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)