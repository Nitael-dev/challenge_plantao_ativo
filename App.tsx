import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import theme from './src/styles/theme';
import { Routes } from './src/routes/index.routes';
import { SafeAreaView } from './src/components/SafeArea/styles';
import { PostsProvider } from './src/contexts/PostsContext';

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <NavigationContainer>
      <PostsProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: '#efefef'
            }}
          >
            <StatusBar barStyle='dark-content' />
            <Routes />
          </SafeAreaView>
        </ThemeProvider>
      </PostsProvider>
    </NavigationContainer>
  );
}

export default App;
