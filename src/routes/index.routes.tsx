import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens/Home";
import { Header } from "../components/Header";

export const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Home'
      detachInactiveScreens
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          header: () => <Header />
        }}
      />
    </Stack.Navigator>
  )
}
