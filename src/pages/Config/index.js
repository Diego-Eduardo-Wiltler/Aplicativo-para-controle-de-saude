import React, {useState, useRef, useReducer} from 'react';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Switch} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Config() {
    const [selectedTextSize, setSelectedTextSize] = useState('25');
    const pickerRef = useRef();

    // const setAsyncStates = async () => {
    //     var a = await AsyncStorage.getItem('darkMode').then((value) => JSON.parse(value) ?? false)
    //     var myInterval = setInterval(setAsyncStates, 1000);
    //     return a;
    // };

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

    const setAsyncStates = async () => {
        await AsyncStorage.getItem('darkMode').then((value) => setDarkMode(JSON.parse(value) ?? false))
        await AsyncStorage.getItem('selectedTextSize').then((value) => setSelectedTextSize(value))
    };
    setAsyncStates();
    const setDarkModeWithStorage = async (value) => {
        setDarkMode(value);
        await AsyncStorage.setItem('darkMode', value.toString());
    }
    const selectedTextSizeWithStorage = async (value) => {
        setSelectedTextSize(value);
        await AsyncStorage.setItem('selectedTextSize', value.toString());
    }
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

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ContainerMain>
                <ContainerHeader>
                    <Button labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Horas')}}>
                        HORÁRIOS
                    </Button>
                    <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Home')}}>
                    VOLTAR
                    </Button> 
                </ContainerHeader>
                <ContainerBody>
                    <View>
                            <MenuText inputSize={selectedTextSize}>Volume do Alarme</MenuText>
                        <ContainerSlider>
                            <Slider
                                style={{width: 360, height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                maximumTrackTintColor="#FFFFFF"
                                minimumTrackTintColor="#000000"

                            />
                         </ContainerSlider>
                        <ContainerContent>
                            <MenuText inputSize={selectedTextSize}>Notificações</MenuText>
                            <Switch value={notifications} onValueChange={async(value) => {await setNotification(value)}} />
                        </ContainerContent>
                        <ContainerContent>
                            <MenuText inputSize={selectedTextSize}>Vibrar</MenuText>
                            <Switch value={vibration} onValueChange={async(value) => {await setVibration(value)}} /> 
                        </ContainerContent>
                        <ContainerContent>
                            <MenuText inputSize={selectedTextSize}>Modo Escuro</MenuText>
                            <Switch value={darkMode} onValueChange={async(value) => {await setDarkModeWithStorage(value)}} />
                        </ContainerContent>
                        <ContainerContent>
                            <MenuText inputSize={selectedTextSize}>Tamanho da Letra</MenuText>    
                            <Picker
                                    ref={pickerRef}
                                    style={{height: 20, width: 95, marginTop: -15}}
                                    selectedValue={selectedTextSize}
                                    onValueChange={(itemValue, itemIndex) =>
                                        selectedTextSizeWithStorage(itemValue)
                                    }>
                                    <Picker.Item key={0} label="P" value="20" />
                                    <Picker.Item key={1} label="M" value="25" />
                                    <Picker.Item key={2} label="G" value="30" />
                                </Picker>    
                        </ContainerContent>
                    </View> 
                </ContainerBody>
            </ContainerMain>
        </View>
    )
}