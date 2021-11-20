import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';


export default function SeusHorarios() {

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        button: {
            marginTop: "10%",
            height: "9%",

          },

          button2: {


          },

          buttonText: {
              fontSize: 22,
              fontFamily:"Blippo, fantasy",
            },
          buttonText2: {
              fontSize: 22,
              fontFamily:"Blippo, fantasy",
              color: 'rgb(92, 92, 92)'
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
        <View style={{flex: 1, flexDirection:"column"}}>
            <ContainerMain>
                <ContainerHeader>
                    <Button labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Config')}}>
                        OPÇÕES
                    </Button>
                    <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Home')}}>
                    VOLTAR
                    </Button> 
                </ContainerHeader>
            </ContainerMain>
        </View>
    )
}