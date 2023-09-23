import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <View key={index} className="mt-2 mx-4">
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Pizza")}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 80, width: 80 }}
          className="rounded-full"
        />
      </TouchableWithoutFeedback>
      <View className="ml-4 mt-2">
        <Text className="text-lg font-bold">{item.name}</Text>
      </View>
    </View>
  );
};

export default Menu;
