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
      screenListeners={{
        state: (props: any) => {console.log(props.data.state.routes.map((e: any) => e.name))}
      }}
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
