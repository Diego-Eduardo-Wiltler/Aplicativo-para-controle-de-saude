import React, {useState, useRef, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider, ContainerCol, HourText} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SeusHorarios() {

    const navigation = useNavigation();

    const [selectedTextSize, setSelectedTextSize] = useState();
    const [alarms, setAlarms] = useState([]);
    const [deleted, setDeleted] = useState(false);

    const setAsyncStates = async () => {
        await AsyncStorage.getItem('selectedTextSize').then((value) => setSelectedTextSize(value))
    };
    
    const getAlarms = async () => {
        await AsyncStorage.getItem('alarms').then((value) => setAlarms(JSON.parse(value)));
    };
    const deleteAlarm = async (posicao) => {
        var a = alarms.splice(posicao, (posicao === 0 ? 1 : posicao))
        await AsyncStorage.setItem('alarms', JSON.stringify(alarms));    
        setAlarms(alarms)
        setDeleted(!deleted)
    }
    useEffect(() => {
        getAlarms()
        setAsyncStates()
        const interval = setInterval(() => {
            getAlarms()
            setAsyncStates()
        }, 10000);

        
        return () => clearInterval(interval);
    }, [])
    useEffect(() => {
        getAlarms() // // this will fire only when loadDataOnlyOnce-reference changes
    }, [deleted]);
    // const listItems = ;
      
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
                <ContainerBody>
                    <ContainerContent>
                        {alarms.map((alarm, index) =>
                            <>
                                <ContainerCol inputSize={selectedTextSize} widthCol={'225'} >
                                    <HourText  inputSize={parseInt(selectedTextSize) + 10} >
                                        {('00' + new Date(alarm.horario).getHours()).slice(-2).toString()}
                                        :
                                        {('00' + new Date(alarm.horario).getMinutes()).slice(-2).toString()}
                                    </HourText>
                                    <MenuText inputSize={parseInt(selectedTextSize) - 5}>Tipo: {alarm.tipo}</MenuText>
                                    <MenuText inputSize={parseInt(selectedTextSize) - 5}>{alarm.diasDaSemana.join(" - ")}</MenuText>
                                    {(alarm.remedio!== null && alarm.remedio !== undefined)  ? 
                                    <MenuText inputSize={parseInt(selectedTextSize) - 8}>Remédio: {alarm.remedio}</MenuText> 
                                    : 
                                    <></>}
                                    {(alarm.exercicio!== null && alarm.exercicio !== undefined) ? 
                                    <MenuText inputSize={parseInt(selectedTextSize) - 8}>Exercício: {alarm.exercicio}</MenuText> 
                                    : <></>}
                                </ContainerCol>
                                <ContainerCol inputSize={selectedTextSize} widthCol={'50'} >
                                    <Button  
                                        mode="contained" color="red" style={{ marginRight: '3%' }}
                                        title='Deletar' onPress={() => {deleteAlarm(index)}}>
                                        Deletar
                                    </Button> 
                                </ContainerCol>
                            </>
                        )}         
                    </ContainerContent>           
                </ContainerBody>
            </ContainerMain>
        </View>
    )
}