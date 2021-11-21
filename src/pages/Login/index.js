import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export default function Login() {
    
    const navigation = useNavigation();

    const styles = StyleSheet.create({
       
        tinyLogo: {
          width: 150,
          height: 150,
          marginTop: "-15%",
        },

        welcome: {
            fontSize: 40,
            marginTop: 130,
            fontFamily:"Blippo, fantasy",
          },

          button: {
            marginTop: 80,
            width: 150,
            height: 50
          },

          buttonText: {
          fontSize: 22,
          fontFamily:"Blippo, fantasy",
          },
       
      });

    return (
        <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
       <Text style={styles.welcome}>Bem Vindo</Text>
      
       <Button style={styles.button} labelStyle={styles.buttonText} mode="contained" color="purple" 
       title='Entrar' onPress={() => {navigation.navigate('Home')}}>
           Entrar
       </Button>
    
        </View>
    )
}