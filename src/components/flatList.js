import React from 'react'
import {
    FlatList,
    View
} from 'react-native';
import FlatListRow from './flatListRow';
import Styles from '../styles/styles';

const showSeperator=()=>(
    <View style = {[Styles.borderBlack, Styles.borderWidthhalf]}/>
)

export default ((props) => {
  const dsData = props.data || []
  const renderList = (
    <FlatList
  data={[{key: 'ARV Agent'}, {key: 'Drug Class'}]}
  renderItem={({item}) => <FlatListRow rowData={item.key}/>}
   ItemSeparatorComponent={showSeperator}
/>
  )
  return (
    renderList
  )
})
