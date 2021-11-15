import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';
import {ContainerMain, ContainerHeader, ContainerBody, ContainerContent, MenuText, ContainerSlider} from './styles';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from '../../components/MultiSelect/index.js';

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
    const [remedio, setRemedio] = useState();
    const [exercicio, setExercicio] = useState();
    const pickerRef = useRef();
   
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
                        title='Entrar' onPress={() => {navigation.goBack()}}>
                    VOLTAR
                    </Button> 
                </ContainerHeader>
                <ContainerBody>
                    <View>
                    {/* <Text>Defina os horários</Text> */}
                        <ContainerContent>
                            <MenuText>Defina horário</MenuText>
                        </ContainerContent>
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
                                        uniqueKey="id"
                                        onSelectedItemsChange={onSelectedItemsChange}
                                        selectedItems={selectedItems}
                                        selectText="    Selecione os dias da semana"
                                        searchInputPlaceholderText="Procure algum dia..."
                                        onChangeInput={(text) => console.log(text)}
                                        tagRemoveIconColor="#CCC"
                                        tagBorderColor="#CCC"
                                        tagTextColor="#CCC"
                                        selectedItemTextColor="#CCC"
                                        selectedItemIconColor="#CCC"
                                        itemTextColor="#000"
                                        displayKey="name"
                                        searchInputStyle={{color: '#CCC'}}
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
                    </View>
                </ContainerBody>
            </ContainerMain>
        </View>
    )
}