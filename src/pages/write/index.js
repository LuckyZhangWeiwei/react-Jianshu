import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends React.PureComponent {
    render() {
        return (
            this.props.isLogin ? 
            <div>write</div>
            :
            <Redirect to='/login'/>
        )
    }
}

const mapStateToProps = state => ({
   isLogin: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps,null)(Write)