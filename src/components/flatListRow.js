import React from 'react'
import {
    Text,
    View
} from 'react-native';
import Styles from '../styles/styles'
import Icon from 'react-native-vector-icons/dist/Feather';

const myIcon = (<Icon name="chevron-right" size={30} color="#A9A9A9" />)

export default ((props) => {
  const renderRow = (
      < View style = {
        [Styles.paddingVerticalMD, Styles.marginHorizontalMD, Styles.flexOne, Styles.flexRow, Styles.justifySpaceBetween]
      } >
    <Text> {props.rowData}</Text>
    {myIcon}
    </View>
  )
  return (
    renderRow
  )
})
