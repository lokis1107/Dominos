import { View, Text, Image } from "react-native";
import React from "react";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";

const Header = () => {
  return (
    <View className="mx-4 mt-2 flex-row items-center justify-between">
      <Bars3CenterLeftIcon size={38} color={"black"} />
      <Image
        source={{
          uri: "https://imgs.search.brave.com/aMB1KXmIJjHSodqekrw6ca39Xug6pDnW2FxLFCaEr2I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzUw/MWZkZTZmZWFiOGVh/ODc2YzAwMDAwMj93/aWR0aD03MDA",
        }}
        style={{ height: 50, width: 180 }}
      />
      <MagnifyingGlassIcon size={35} color={"black"} />
    </View>
  );
};

export default Header;
