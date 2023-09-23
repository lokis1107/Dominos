import { View, Text, Image } from 'react-native'
import React from 'react'

const Offers = ({item, index}) => {
  return (
    <View key={index} className="mt-3">
      <Image source={{uri:item.image}} style={{width:"100%", height:155 }} className="rounded-2xl"/>
    </View>
  )
}

export default Offers