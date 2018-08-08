import React from 'react'
import { connect } from 'react-redux'
import {RecommendWrapper, RecommendItem} from './../style'

class Recommend extends React.Component {
    render() {
        return (
            <RecommendWrapper>
            {
                this.props.banners.map(item => {
                    return (
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    )
                })
            }
            </RecommendWrapper>
        )
    }
}

const banners = (state) => ({
    banners: state.getIn(['home', 'recommendList'])
})

export default connect(banners)(Recommend)