import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "react-native-gesture-handler";

//Screens
import { HomeScreen } from "./screens";

import { icons, COLORS, FONTS, SIZES } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"HomeScreen"}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Mokhele Sneakers",
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Searchbar clicked")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
