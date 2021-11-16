import React, {Component, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';
import Horas from './pages/Horas';
import {Button} from 'react-native-paper';
import SeusHorarios from './pages/SeusHorarios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme } from '@react-navigation/native';

const App = createStackNavigator();
const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background:  'rgb(148,150,152)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

export default function Routes(){
    const [darkMode, setDarkMode] = useState(false);
    const setAsyncStates = async () => {
        await AsyncStorage.getItem('darkMode').then((value) => setDarkMode(JSON.parse(value) ?? false))
    };
    var myInterval = setInterval(setAsyncStates, 1000);

    return (
        <NavigationContainer theme={darkMode ? MyTheme : DefaultTheme }>
            <App.Navigator>
               <App.Screen name="Login" options={{headerShown: false}} component={Login}/> 
               <App.Screen name="Home" options={{headerShown: false}} component={Home}/> 
               <App.Screen name="Config" options={{headerShown: false}} component={Config}/> 
               <App.Screen name="Horas" options={{headerShown: false}} component={Horas}/> 
               <App.Screen name="SeusHorarios" options={{headerShown: false}} component={SeusHorarios}/> 

            </App.Navigator>
        </NavigationContainer>
    )
};
