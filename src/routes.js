import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';
import Horas from './pages/Horas';
import {Button} from 'react-native-paper';


const App = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <App.Navigator>
               {/* <App.Screen name="Login" options={{headerShown: false}} component={Login}/>  */}
               {/* <App.Screen name="Home" options={{headerShown: false}} component={Home}/>  */}
               <App.Screen name="Config" options={{headerShown: false}} component={Config}/> 
               {/* <App.Screen name="Horas" options={{headerShown: false}} component={Horas}/>  */}
            </App.Navigator>
        </NavigationContainer>
    )
};
