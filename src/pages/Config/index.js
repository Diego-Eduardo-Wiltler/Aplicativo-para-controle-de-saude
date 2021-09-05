import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Switch} from 'react-native-paper';
import CircleSlider from "react-native-circle-slider";
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent} from './styles';
import Slider from '@react-native-community/slider';


// import VolumeSlider from 'react-native-volume-slider';

export default function Config() {
    const navigation = useNavigation();
    const [notifications, setNotification] = useState(false);
    const [vibration, setVibration] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const styles = StyleSheet.create({

        button: {
            marginTop: "10%",
            // width: "30%",
            height: "9%",

          },

          button2: {


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
            // marginTop: "90%",
          },

    })

    

    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ContainerMain>
                <ContainerHeader>
                    <Button labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Horas')}}>
                        HORÁRIOS
                    </Button>
                    <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.goBack()}}>
                    VOLTAR
                    </Button> 
                </ContainerHeader>
            
                <ContainerBody>
                    <View>
                        <Text>Volume do Alarme</Text>
                        <Slider
                            style={{width: 360, height: 40}}
                            minimumValue={0}
                            maximumValue={100}
                            maximumTrackTintColor="#FFFFFF"
                            minimumTrackTintColor="#000000"

                        />
                        <ContainerContent>
                            <Text>Notificações</Text>
                            <Switch value={notifications} onValueChange={async(value) => {await setNotification(value)}} />
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Vibrar</Text>
                            <Switch value={vibration} onValueChange={async(value) => {await setVibration(value)}} /> 
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Modo Escuro</Text>
                            <Switch value={darkMode} onValueChange={async(value) => {await setDarkMode(value)}} />
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Tamanho da Letra</Text>                
                        </ContainerContent>
                    </View>
                    
                </ContainerBody>
                
                
                
                {/* <VolumeSlider
                    thumbSize={{
                        width: 8,
                        height: 8
                      }}
                      thumbTintColor="rgb(146,146,157)"
                      minimumTrackTintColor="rgb(146,146,157)"
                      maximumTrackTintColor="rgba(255,255,255, 0.1)"
                      showsRouteButton
                /> */}
            </ContainerMain>
        </View>
    )
}