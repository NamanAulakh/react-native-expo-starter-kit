// @flow
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

type State = {
  yo: string,
}

class Root extends Component<null, State> {
  constructor(props) {
    super(props)

    this.state = {
      yo: 'yo',
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Yo</Text>
      </View>
    )
  }
}

export default connect(null, null)(Root)
