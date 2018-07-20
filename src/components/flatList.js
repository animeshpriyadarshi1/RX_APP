import React from 'react'
import {
    FlatList,
    Text
} from 'react-native';
import FlatListRow from './flatListRow';

export default ((props) => {
  const dsData = props.data || []
  const renderList = (
    <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <FlatListRow rowData={item.key}/>}
/>
  )
  return (
    renderList
  )
})
