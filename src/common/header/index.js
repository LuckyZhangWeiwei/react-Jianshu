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
                   <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
               </SearchInfoTitle>
               <SearchInfoList>{pageList}</SearchInfoList>
         </SearchInfo> 
        ) : null
   }
   render() {
       const { focus, handleInputFocus, handleInputBlur } = this.props
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
                        in={focus}
                        classNames="slide"
                        >
                        <NavSearch 
                            className={focus ? "focus" : ""} 
                            onFocus={handleInputFocus} 
                            onBlur={handleInputBlur} 
                        />
                    </CSSTransition>
                    <i className={focus ? "focus iconfont" : "iconfont"}>&#xe614;</i>
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
        // focus: state.get('header').get('focus'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
           dispatch(actionCreators.getList()) 
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
        handleChangePage(page, totalPage) {
            if(page < totalPage) {
                dispatch(actionCreators.handleChangePage(page + 1))
            } else {
                dispatch(actionCreators.handleChangePage(1))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)