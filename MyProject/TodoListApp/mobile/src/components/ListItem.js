import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const ListItem = props => {
  //props.item은 파라미터인데 이 자체가 각 item을 뜻함.
  return (
    <Container>
      <Wrapper>
        <Text>
          {props.item.title} {props.item.count}
        </Text>
        <IconContainer>
          <IconWrapper
            onPress={() => {
              props.addHandler(props.item);
            }}>
            <IconText>+</IconText>
          </IconWrapper>
          <IconWrapper
            onPress={() => {
              props.subHandler(props.item);
            }}>
            <IconText>-</IconText>
          </IconWrapper>
          <IconWrapper>
            <IconText
              onPress={() => {
                props.delHandler(props.item);
              }}>
              del
            </IconText>
          </IconWrapper>
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;
const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: grey;
  border-radius: 10px;
  padding-vertical: 12px;
  justify-content: space-between;
  align-items: center;
`;
const IconContainer = styled.View`
  flex-direction: row;
`;
const IconWrapper = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 5px;
  background-color: red;
  border-radius: 30px;
`;
const IconText = styled.Text`
  font-size: 20px;
`;

export default ListItem;
