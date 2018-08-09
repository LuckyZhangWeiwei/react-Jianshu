import React from 'react'
import { connect } from 'react-redux'
import Topics from './components/Topics'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends React.PureComponent {
    constructor(props){
        super(props)
        this.handleScrollTop = this.handleScrollTop.bind(this)
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.switchTopShow)
    }

    handleScrollTop() {
        window.scroll(0, 0)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.switchTopShow)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4361/599ae85090db0f4a4cb3cca4d7aeb645f6cc91f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topics />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ?
                    <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>:
                    null
                }
            </HomeWrapper>
        )
    }
}

const mapStateToProps = state => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = dispatch => ({
    changeHomeData() {
         const action = actionCreators.getHomeInfo()
         dispatch(action)
    },
    switchTopShow() {
         const scrollHeight = document.documentElement.scrollTop
         if(scrollHeight > 400) {
            dispatch(actionCreators.toggleTopShow(true))
         } else {
            dispatch(actionCreators.toggleTopShow(false))
         }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)