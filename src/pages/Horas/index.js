import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';



export default function Horas() {
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

        <View style={{flexDirection:"column", flex: 1}}>
            <View style={{flexDirection: "row-reverse", justifyContent: "space-around", marginTop: "1%" }}>
            
                <Button labelStyle={styles.buttonText} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.navigate('Config')}}>
                    OPÇÕES
                </Button>
                <Button  labelStyle={styles.buttonText} mode="contained" color="purple" 
                    title='Entrar' onPress={() => {navigation.goBack()}}>
                   VOLTAR
                </Button> 
            </View>
            <Title>Defina os horários</Title>
            <View style={{justifyContent:'flex-start', flex: 2, flexDirection:"row"}}>
            
         <View>
                
                    <Text>Escolha o tipo</Text>
                    <Text>Defina horário</Text>
                    <Text>Defina os dias</Text>
                    <Text>Insira o nome do remédio (opicional)</Text>                
                    <Text>Insira o nome do exercício (opicional)</Text>
                    
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

            </View>
        </View>
    )
}