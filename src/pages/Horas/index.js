import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from '../../components/MultiSelect/index.js';
import { MultiSelectWeekDays } from './styles';

export default function Horas() {
    const items = [{
        id: "1",
        name: 'Segunda'
      }, {
        id: '2',
        name: 'Terça'
      },
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }
    
    function close() {
      pickerRef.current.blur();
    }
    const navigation = useNavigation();
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
                        title='Entrar' onPress={() => {navigation.navigate('Config')}}>
                        OPÇÕES
                    </Button>
                    <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.goBack()}}>
                    VOLTAR
                    </Button> 
                </ContainerHeader>
                    <Title>Defina os horários</Title>
                <ContainerBody>
                    <View>
                        <ContainerContent>
                            <Text>Escolha o tipo</Text>
                            <Picker
                                    ref={pickerRef}
                                    style={{height: 20, width: 95, marginTop: -15}}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item key={0} label="P" value="P" />
                                    <Picker.Item key={1} label="M" value="M" />
                                    <Picker.Item key={2} label="G" value="G" />
                                </Picker>    
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Defina horário</Text>
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Defina os dias</Text>
                            
                            <View style={{ flex: 1 }}>
                                <MultiSelectWeekDays
                                data = {items}
                                labelFiled = "label"
                                valueFiled = "value"
                                onChange = {() => {} }
                                />
                               
                                </View>

      
                        </ContainerContent>
                        <ContainerContent>
                            <Text>Insira o nome do remédio (opicional)</Text> 
                        </ContainerContent>   
                        <ContainerContent>            
                            <Text>Insira o nome do exercício (opicional)</Text>
                        </ContainerContent>
                    
                    </View>
                    {/* <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Button style={styles.button} labelStyle={styles.buttonText1} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Home')}}>
                        SEUS HORÁRIOS
                    </Button>
                    
                    <Button style={styles.button} labelStyle={styles.buttonText1} mode="contained" color="purple" 
                        title='Entrar' onPress={() => {navigation.navigate('Home')}}>
                        DEFINIR HORÁRIOS
                    </Button> */}
                </ContainerBody>       
            </ContainerMain>
        </View>
    )
}