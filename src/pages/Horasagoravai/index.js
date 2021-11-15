import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Switch} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';


// import VolumeSlider from 'react-native-volume-slider';

export default function Config() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }
    
    function close() {
      pickerRef.current.blur();
    }
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
                        <ContainerSlider>
                            <Slider
                                style={{width: 360, height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                maximumTrackTintColor="#FFFFFF"
                                minimumTrackTintColor="#000000"

                            />
                         </ContainerSlider>
                    </View>
                    
                </ContainerBody>
                
                
            </ContainerMain>
        </View>
    )
}