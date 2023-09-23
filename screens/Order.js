import { View, Text, Image } from 'react-native'
import React from 'react'

const Order = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={{
          uri: "https://imgs.search.brave.com/aMB1KXmIJjHSodqekrw6ca39Xug6pDnW2FxLFCaEr2I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzUw/MWZkZTZmZWFiOGVh/ODc2YzAwMDAwMj93/aWR0aD03MDA",
        }}
        style={{ height: 80, width: 280 }}
      />
      <Text className="text-2xl font-bold text-center mt-3">Your Order's is Conformed</Text>
      <Text className="mt-2 font-bold">Your order is delivery in 30min</Text>
    </View>
  )
}

export default Order