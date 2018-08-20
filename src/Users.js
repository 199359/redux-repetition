import React, { Component } from 'react'
import { connect } from 'react-redux'
import {initUserSyncAction} from './state/users'

class Users extends Component {

    componentDidMount(){
        this.props.initUserSyncAction()
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
    initUserSyncAction: () => dispatch(initUserSyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

