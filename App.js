import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from './src/screens/HomeScreen';
import AddPostScreen from './src/screens/AddPostScreen';
import store from "./src/store";
import {Provider } from "react-redux";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StatusBar backgroundColor="#1a94eb" style='light' />
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home"
            options={{title : "View all posts"}} 
            component={HomeScreen}
         />
        <Drawer.Screen name="AddPost" 
            options={{title : "Create new post"}}  
            component={AddPostScreen}
        />

      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

