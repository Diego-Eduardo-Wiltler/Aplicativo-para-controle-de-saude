import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const setAsyncStates = async () => {
    await AsyncStorage.getItem('darkMode').then((value) => setDarkMode(JSON.parse(value) ?? false))
};
setAsyncStates();

export const ContainerMain = styled.ScrollView`


`;

export const ContainerHeader = styled.View`
flex-direction: row-reverse;
margin: ${RFValue(20)}px ${RFValue(53)}px ${RFValue(52)}px ${RFValue(53)}px;
justify-content: space-between;
`;

export const ContainerBody = styled.View`
flex-direction: row;
justify-content: center;
alignItems: center;
flex: 2;
`;

export const ContainerContent = styled.View`
flex-direction: row;
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(50)}px ${RFValue(0)}px;
flex: 2;
`;

export const MenuText = styled.Text`
font-size: 20;
`;

export const ContainerSlider = styled.Text`
margin: ${RFValue(30)}px ${RFValue(0)}px ${RFValue(40)}px ${RFValue(0)}px;
`;

