import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';



export default function Home() {
    const navigation = useNavigation();
    const styles = StyleSheet.create({

        button: {
            marginTop: "10%",
            height: "9%",

          },
          buttonText: {
            fontSize: 22,
            fontFamily:"Blippo, fantasy",
            },
           
            buttonText1: {
                fontSize: 25,
                fontFamily:"Blippo, fantasy",
               
                },
          tinyLogo: {
            width: 150,
            height: 150,
            marginBottom: "10%",
          },

    })

    return (
        <View style={{flexDirection:"column", flex: 1}}>
            <View style={{flexDirection: "row-reverse", justifyContent: "space-around", marginTop: "1%" }}>
            
                <Button labelStyle={styles.buttonText} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.navigate('Config')}}>
                    OPÇÕES
                </Button>
                <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.navigate('Home')}}>
                    AJUDA
                </Button> 
            </View>
        
            <View style={{justifyContent:'center', alignItems:'center', flex: 2, flexDirection:"column"}}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Button style={styles.button} labelStyle={styles.buttonText1} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.navigate('SeusHorarios')}}>
                    SEUS HORÁRIOS
                </Button>
                
                <Button style={styles.button} labelStyle={styles.buttonText1} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.navigate('Horas')}}>
                    DEFINIR HORÁRIOS
                </Button>
            </View>
        </View>
    )
}