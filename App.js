import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Appnavigation from "./navigation/Appnavigation";
import { BasketContext } from "./Context";

const App = () => {
  return (
    <BasketContext>
      <NavigationContainer>
        <StatusBar hidden />
        <Appnavigation />
      </NavigationContainer>
    </BasketContext>
  );
};

export default App;
