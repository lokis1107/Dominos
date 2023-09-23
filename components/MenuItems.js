import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { cartItem } from "../Context";
import { useNavigation } from "@react-navigation/native";

const MenuItems = ({ item }) => {
  const { cart, setCart } = useContext(cartItem);
  console.log(cart.length);

  const navigation = useNavigation();
  return (
    <View>
      <View className="mx-4 mt-4">
        <View className="items-center justify-center">
          <Image
            source={{ uri: item.image }}
            style={{ height: 270, width: "75%" }}
          />
        </View>
        <View
          className="mt-2 p-2 border mx-5 bg-slate-200"
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        >
          <Text className="font-bold text-xl text-center">{item.name}</Text>
          <Text className="mt-2 text-lg font-semibold">{item.description}</Text>
          <View className="flex-row items-center justify-between mx-4">
            <Text className="text-lg font-bold mt-2">Size</Text>
            <Text className="text-xl font-bold">₹{item.price}</Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Pressable className="p-2 bg-emerald-300 rounded-xl">
              <ModalDropdown
                className="font-bold text-lg"
                options={["Regular", "Medium", "Large"]}
                dropdownStyle={{ height: 110, width: 60 }}
              />
            </Pressable>
            <View className="p-3 rounded-xl bg-emerald-300">
              <Pressable
                onPress={() =>
                  navigation.navigate("Cart")
                }
              >
                <Text className="text-lg font-bold text-white">
                  Add To Cart
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItems;
