import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Routes from './routes';
export default function App() {
    return (
        <SafeAreaProvider>
        <Routes />
        </SafeAreaProvider>
    )
}