import React from 'react'
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style'
import {actionCreators} from '../store'

class List extends React.Component {
    render() {
        const { articleList, getMoreList, page } = this.props
        return (
            <div>
                {
                    articleList.map(item => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='list-pic' src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = dispatch => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatchToProps)(List)