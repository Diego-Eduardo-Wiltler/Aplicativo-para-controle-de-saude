import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const ContainerMain = styled.ScrollView`


`;

export const ContainerHeader = styled.View`
flex-direction: row-reverse;
margin: ${RFValue(20)}px ${RFValue(53)}px ${RFValue(52)}px ${RFValue(53)}px;
justify-content: space-between;
`;

export const ContainerBody = styled.View`
    padding-left: 30px;
    padding-right: 30px;
`;


export const ContainerContent = styled.View`
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(50)}px ${RFValue(0)}px;
flex-wrap: wrap;
display: flex;
width: 460px;
flex-direction: row;
`;

export const MenuText = styled.Text`
font-size: ${props => props.inputSize || "20"}px;
`;
export const HourText = styled.Text`
font-size: ${props => props.inputSize || '20'}px;
`;

export const ContainerSlider = styled.Text`
margin: ${RFValue(30)}px ${RFValue(0)}px ${RFValue(40)}px ${RFValue(0)}px;
`;

export const ContainerCol = styled.View`    
    min-width: ${props => props.widthCol || "250"}px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

