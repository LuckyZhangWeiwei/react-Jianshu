import React from 'react'
import { connect } from 'react-redux'
import Topics from './components/Topics'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends React.Component {
    componentDidMount() {
        this.props.changeHomeData()
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
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeHomeData() {
         const action = actionCreators.getHomeInfo()
         dispatch(action)
    }
})

export default connect(null, mapDispatchToProps)(Home)