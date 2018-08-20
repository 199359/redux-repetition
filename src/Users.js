import React, { Component } from 'react'
import { connect } from 'react-redux'
import {initUserSyncAction, stopUserSyncAction} from './state/users'

class Users extends Component {

    componentDidMount(){
        this.props.initUserSyncAction()
    }

    componentWillUnmount(){
        this.props.stopUserSyncAction()
    }

  render(){
    return(
      <div>
      {
        this.props.users === null ?
          'Ładowanie userów...'
          :
          Object.entries(this.props.users)
            .map(([ key, value ]) => ({
              ...value,
              key
            }))
            .map(user => (
              <div
              key={user.key}>
              {user.name}
              </div>
            ))
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    initUserSyncAction: () => dispatch(initUserSyncAction()),
    stopUserSyncAction: () => dispatch(stopUserSyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

