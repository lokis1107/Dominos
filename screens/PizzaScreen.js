import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { ArrowLeftIcon, BellIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { pizza } from "../data";
import MenuItems from "../components/MenuItems";

const PizzaScreen = () => {
  const navigation = useNavigation();
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
        <Text className="text-2xl font-bold">Menu Items</Text>
        <View>
          <BellIcon size={30} color={"black"} />
        </View>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pizza}
          contentContainerStyle={{paddingBottom:175}}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItems item={item} />}
        />
      </View>
    </View>
  );
};

export default PizzaScreen;
