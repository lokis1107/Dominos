import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { home_data, home_offers, menu } from "../data";
import Menu from "../components/Menu";
import Offers from "../components/Offers";
import Header from "../components/Header";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <View className="mb-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {home_data.map((item, index) => {
            return (
              <View className="mx-3 mt-4">
                <Image
                  style={{ height: 180, width: 350 }}
                  source={{ uri: item.image }}
                  className="rounded-3xl"
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="mx-4">
        <Text className="text-2xl font-bold">Menu Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {menu.map((item, index) => (
            <Menu item={item} index={index} />
          ))}
        </ScrollView>
      </View>
      <View className="mx-4 mt-3">
        <Text className="text-xl font-bold">Offers List</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:480}}>
          {home_offers.map((item, index) => (
            <Offers item={item} index={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
