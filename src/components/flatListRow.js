import React from 'react'
import {
    Text
} from 'react-native'

export default ((props) => {
  const renderRow = (
    <Text> {props.rowData}</Text>
  )
  return (
    renderRow
  )
})
