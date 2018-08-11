import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreator } from './../../pages/login/store'
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

class Header extends React.Component {
     getListArea = () => {
         const { focus, list, page, totalPage, handleMouseEntry, handleMouseOut, mouseIn, handleChangePage } = this.props
         const pageList = []
         const jsList = list.toJS()
         if(jsList.length){ 
             for(let i = (page - 1) * 10; i < page * 10; i++ ) {
            pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
         }
        }
        return focus || mouseIn ? (
           <SearchInfo 
             onMouseEnter={handleMouseEntry} 
             onMouseLeave={handleMouseOut}>
               <SearchInfoTitle>
                   热门搜索
                   <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                     <i className="iconfont spin" ref={icon => {this.spinIcon = icon}}>&#xe851;</i>
                      换一批
                   </SearchInfoSwitch>
               </SearchInfoTitle>
               <SearchInfoList>{pageList}</SearchInfoList>
         </SearchInfo> 
        ) : null
   }
   render() {
       const { focus, list, handleInputFocus, handleInputBlur, isLogin, logOut } = this.props
       return (
        <HeaderWrapper>
            <Link to='/'>
              <Logo/>
            </Link>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    isLogin ?
                    <NavItem onClick={logOut} className='right'>注销</NavItem>
                    :
                    <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                }
                
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout = {200}
                        in={focus}
                        classNames="slide"
                        >
                        <NavSearch 
                            className={focus ? "focus" : ""} 
                            onFocus={() => handleInputFocus(list)} 
                            onBlur={handleInputBlur} 
                        />
                    </CSSTransition>
                    <i className={focus ? "focus iconfont zoom" : "iconfont zoom"}>&#xe614;</i>
                    {this.getListArea()}
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

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(['header', 'focus']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        isLogin: state.getIn(['login', 'login']),
        // focus: state.get('header').get('focus'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
           !list.size && dispatch(actionCreators.getList()) 
           dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
           dispatch(actionCreators.searchBlur())
        },
        handleMouseOut() {
            dispatch(actionCreators.mouseOut())
        },
        handleMouseEntry() {
            dispatch(actionCreators.mouseEntry())
        },
        handleChangePage(page, totalPage, spinIcon) {
            if(page < totalPage) {
                dispatch(actionCreators.handleChangePage(page + 1))
            } else {
                dispatch(actionCreators.handleChangePage(1))
            }
            let preAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
            if (preAngle) { 
                preAngle = parseInt(preAngle, 10)
            } else {
                preAngle = 0
            }
            spinIcon.style.transform = 'rotate('+(preAngle + 360)+'deg)'   
        },
        logOut() {
            dispatch(loginActionCreator.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)