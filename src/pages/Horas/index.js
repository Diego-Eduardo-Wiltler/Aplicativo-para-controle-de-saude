import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerCol} from './styles';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from '../../components/MultiSelect/index.js';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Horas() {
    const items = [
        {
            id: 'Dom',
            name: 'Domingo'
        },

        {
            id: "Seg",
            name: 'Segunda'
        }, 
        {
            id: 'Ter',
            name: 'Terça'
        },
        {
            id: 'Qua',
            name: 'Quarta'
        },
        {
            id: 'Qui',
            name: 'Quinta'
        },
        {
            id: 'Sex',
            name: 'Sexta'
        },
        {
            id: 'Sab',
            name: 'Sabado'
        },
      
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedTextSize, setSelectedTextSize] = useState();
    const [remedio, setRemedio] = useState();
    const [tipo, setTipo] = useState('Nenhum');
    const [exercicio, setExercicio] = useState();
    const [obrigatorioDias, setObrigatorioDias] = useState('');
    const [obrigatorioHorario, setObrigatorioHorario] = useState('');
    const pickerRef = useRef();

    const setAsyncStates = async () => {
        await AsyncStorage.getItem('selectedTextSize').then((value) => setSelectedTextSize(value))
    };
    setInterval(setAsyncStates, 2000)
   
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  
    const onSelectedItemsChange = (selectedItems) => {
        setObrigatorioDias('')
        setSelectedItems(selectedItems);
    };
    
    const navigation = useNavigation();

    const setTypeWithStorage = async (value) => {
        setType(value);
        await AsyncStorage.setItem('type', value.toString());
    }

    const setAlarms = async (object) => {
        var alarms = await AsyncStorage.getItem('alarms').then((value) => JSON.parse(value));
        alarms.push(object)
        await AsyncStorage.setItem('alarms', JSON.stringify(alarms));    
    }

    function setAlarm() {
        if (selectedItems.length === 0) {
            setObrigatorioDias('Os dias são obrigatórios!')
        } else {
            var object = {
                'tipo' : tipo,
                'diasDaSemana' : selectedItems,
                'horario' : date,
                'remedio': remedio,
                'exercicio': exercicio
            }
            setAlarms(object);
        }
        console.log(object);
    }

    const styles = StyleSheet.create({
        button: {
            marginTop: "10%",
            height: "9%",
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
        <View style={{flex: 1}}>
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
                            <ContainerCol widthCol={'230'}>
                                <MenuText inputSize={selectedTextSize}>Escolha o tipo</MenuText>
                            </ContainerCol>
                            <ContainerCol inputSize={selectedTextSize} widthCol={'150'}>
                                <Picker
                                    ref={pickerRef}
                                    style={{height: 20, width: 145, marginTop: -15}}
                                    selectedValue={tipo}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setTipo(itemValue)
                                    }>
                                    <Picker.Item key={0} label="Nenhum" value="Nenhum" />
                                    <Picker.Item key={1} label="Remédio" value="Remédio" />
                                    <Picker.Item key={2} label="Exercício" value="Exercício" />
                                </Picker>    
                            </ContainerCol>
                        </ContainerContent>
                        <ContainerContent>
                            <ContainerCol widthCol={'460'} >
                                <MenuText inputSize={selectedTextSize}>Defina os dias</MenuText>
                                {(obrigatorioDias!== '') ? 
                                    <MenuText style={{color: 'red'}} inputSize={parseInt(selectedTextSize) - 8}>{obrigatorioDias}</MenuText> 
                                    : <></>}
                            </ContainerCol>
                            <ContainerCol inputSize={selectedTextSize} widthCol={'350'}>
                                <MultiSelect
                                    hideTags
                                    items={items}
                                    styleMainWrapper={{ marginTop: 10}}
                                    styleInputGroup= {{ backgroundColor:"#e5e5e5"}}
                                    styleDropdownMenu= {{ backgroundColor:"#e5e5e5"}}
                                    styleDropdownMenuSubsection= {{ backgroundColor:"#e5e5e5"}}
                                    styleListContainer= {{ backgroundColor:"#e5e5e5"}}
                                    uniqueKey="id"
                                    onSelectedItemsChange={onSelectedItemsChange}
                                    selectedItems={selectedItems}
                                    selectText="    Selecione os dias da semana"
                                    searchInputPlaceholderText="Procure algum dia..."
                                    onChangeInput={(text) => console.log(text)}
                                    tagRemoveIconColor="#e5e5e5"
                                    tagBorderColor="#e5e5e5"
                                    tagTextColor="#e5e5e5"
                                    selectedItemTextColor="blue"
                                    selectedItemIconColor="blue"
                                    itemTextColor="#000"
                                    displayKey="name"
                                    searchInputStyle={{color: '#e5e5e5'}}
                                    submitButtonColor="#48d22b"
                                    noItemsText="Nenhum item encontrado"
                                    styleTextTag={{fontSize: 100}}
                                    fontSize={19}
                                    styleTextDropdownSelected={{height:30}}
                                    styleTextDropdown={{height:30}}
                                    submitButtonText="Confirmar"
                                /> 
                            </ContainerCol>
                        </ContainerContent>
                        <ContainerContent>
                            <ContainerCol inputSize={selectedTextSize} widthCol={'345'} >
                                <Button 
                                    onPress={() => setOpen(true)} 
                                    labelStyle={styles.buttonText2} 
                                    mode="contained"
                                    color='rgb(235,235,235)'
                                >
                                    {date ? 
                                    ('Defina o horário: ' + new Date(date).getHours() + ':' + new Date(date).getMinutes()) 
                                    : 'Defina o horário'}
                                </Button>
                            </ContainerCol>
                            <DatePicker
                                modal
                                mode="time"
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                }}
                                    title="Selecione um horário"
                                    confirmText='Comfirmar'
                                    cancelText='Cancelar'
                                    onCancel={() => {
                                    setOpen(false)
                                }}
                            />                     
                        </ContainerContent>
                        <ContainerContent>
                            <ContainerCol widthCol={'460'} >
                                <MenuText inputSize={selectedTextSize}>Nome do remédio (opcional)</MenuText> 
                            </ContainerCol>
                            <ContainerCol widthCol={'345'} >
                                <TextInput
                                    label="remedio"
                                    value={remedio}
                                    onChangeText={remedio => setRemedio(remedio)}
                                />
                            </ContainerCol>
                        </ContainerContent>   
                        <ContainerContent>  
                            <ContainerCol widthCol={'460'} >
                                <MenuText inputSize={selectedTextSize}>Nome do exercício (opcional)</MenuText>
                            </ContainerCol>
                            <ContainerCol widthCol={'345'} >
                                <TextInput
                                    label="exercício"
                                    value={exercicio}
                                    onChangeText={exercicio => setExercicio(exercicio)}
                                />
                            </ContainerCol>
                        </ContainerContent>
                        <ContainerContent> 
                            <ContainerCol widthCol={'460'} >
                                <Button  labelStyle={styles.buttonText} 
                                    mode="contained" color="green" style={{ width:200, marginLeft: '18%' }}
                                    title='Entrar' onPress={() => {setAlarm()}}>
                                    Salvar
                                </Button> 
                            </ContainerCol>
                        </ContainerContent>
                </ContainerBody>
            </ContainerMain>
        </View>
    )
}