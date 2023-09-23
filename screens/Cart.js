import { View, Text, TouchableOpacity, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { ArrowLeftIcon, BellIcon } from "react-native-heroicons/solid";
import { pizza_mani } from "../data";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-white">
      <View className="flex-row items-center justify-between mx-3">
        <TouchableOpacity
          className="p-3 shadow-xl rounded-full mt-2"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={30} color={"black"} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Cart Items</Text>
        <View>
          <BellIcon size={30} color={"black"} />
        </View>
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 155 }}
        >
          {pizza_mani.map((item, index) => {
            return (
              <View key={index} className="flex-row items-center p-3">
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 150, width: 150 }}
                />
                <View className="ml-5">
                  <Text className="text-center text-xl font-bold">{item.name}</Text>
                  <Text className="text-lg font-bold">₹{item.price}</Text>
                  <Pressable className="mt-2 p-2" onPress={()=> navigation.navigate("Order")}>
                    <Text className="text-xl font-bold text-blue-700">Place Order</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;
