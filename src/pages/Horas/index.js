import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from '../../components/MultiSelect/index.js';
import DatePicker from 'react-native-date-picker'

export default function Horas() {
    const items = [
        {
            id: '1',
            name: 'Domingo'
        },

        {
            id: "2",
            name: 'Segunda'
        }, 
        {
            id: '3',
            name: 'Terça'
        },
        {
            id: '4',
            name: 'Quarta'
        },
        {
            id: '5',
            name: 'Quinta'
        },
        {
            id: '6',
            name: 'Sexta'
        },
        {
            id: '7',
            name: 'Sabado'
        },
      
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [remedio, setRemedio] = useState();
    const [exercicio, setExercicio] = useState();
    const pickerRef = useRef();
   
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  
    const onSelectedItemsChange = (selectedItems) => {
      // Set Selected Items
      setSelectedItems(selectedItems);
    };

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
            // marginTop: "90%",
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
                    <View>
                        <ContainerContent>
                            <MenuText>Escolha o tipo</MenuText>
                            <Picker
                                ref={pickerRef}
                                style={{height: 20, width: 155, marginTop: -15, marginLeft: 70}}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item key={0} label="Remédio" value="R" />
                                <Picker.Item key={1} label="Exercício" value="E" />
                                <Picker.Item key={2} label="Nenhum" value="N" />

                            </Picker>    
                        </ContainerContent>
                        <ContainerContent>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                <MenuText>Defina os dias</MenuText>
                                </View>
                                <View style={{ flex: 1 }}>
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
                                </View>
                            </View>
                        </ContainerContent>
                        <ContainerContent>
                            <Button 
                                onPress={() => setOpen(true)} 
                                labelStyle={styles.buttonText2} 
                                mode="contained"
                                color='rgb(235,235,235)'
                            >
                                Defina o horário 
                            </Button>
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
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                <MenuText>Insira o nome do remédio (opicional)</MenuText> 
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                    label="remedio"
                                    value={remedio}
                                    onChangeText={remedio => setRemedio(remedio)}
                                    />
                                </View>
                            </View>
                        </ContainerContent>   
                        <ContainerContent>  
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>          
                                    <MenuText>Insira o nome do exercício (opicional)</MenuText>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                    label="exercício"
                                    value={exercicio}
                                    onChangeText={exercicio => setExercicio(exercicio)}
                                    />
                                </View>
                            </View>
                        </ContainerContent>
                        <ContainerContent style={{ justifyContent:'center' }} > 
                            <Button  labelStyle={styles.buttonText} mode="contained" color="green" style={{ width:200 }}
                                title='Entrar' onPress={() => {navigation.goBack()}}>
                                Salvar
                            </Button> 
                        </ContainerContent>
                    </View>
                </ContainerBody>
            </ContainerMain>
        </View>
    )
}