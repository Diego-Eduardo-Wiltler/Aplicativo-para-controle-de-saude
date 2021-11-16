import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const ContainerMain = styled.ScrollView`


`;

export const ContainerHeader = styled.View`
flex-direction: row-reverse;
margin: ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px;
justify-content: space-around;
`;

export const ContainerBody = styled.View`
flex-direction: row;
justify-content: flex-start;
flex: 2;
`;

export const ContainerContent = styled.View`
flex-direction: row;
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(60)}px ${RFValue(0)}px;
justify-content: space-between;
flex: 2;
`;

export const MenuText = styled.Text`
font-size: 20px;
`;

export const ContainerSlider = styled.Text`
margin: ${RFValue(30)}px ${RFValue(0)}px ${RFValue(40)}px ${RFValue(0)}px;
`;

