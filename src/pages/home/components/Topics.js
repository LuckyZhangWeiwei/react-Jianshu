import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopItem } from './../style'

class Topics extends React.Component {
    render() {
        const { topicList } = this.props
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                       return (<TopItem  key={item.get('id')}>
                            <img 
                                className='topic-pic'
                                src={item.get('imgUrl')} alt={item.get('title')} 
                             />
                            {item.get('title')}
                        </TopItem>)
                    })
                }
                
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])('home').get('topicList')
})

export default connect(mapState)(Topics)