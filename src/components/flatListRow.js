import React from 'react'
import {
    Text,
    View
} from 'react-native';
import Styles from '../styles/styles'

export default ((props) => {
  const renderRow = (
      <View style = {[Styles.paddingVerticalMD, Styles.marginHorizontalMD]}>
    <Text> {props.rowData}</Text>
    </View>
  )
  return (
    renderRow
  )
})
