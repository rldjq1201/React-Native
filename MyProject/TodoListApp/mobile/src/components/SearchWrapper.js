import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
{
  /* 
// onChangeText를 통해 바뀌는 값을 value로 선언한뒤 props로 전달할 setValue를 통해 value를 갱신.
// 즉, setText를 통해 바뀌는 value값이 text로 전달되는 것.
        <Container>
        <SearchText onChangeText={value => props.setValue(value)} />
        <ButtonWrapper onPress={props.onPress}>
            <Text>Click me!</Text>
        </ButtonWrapper>
    </Container>
    */
}
const SearchWrapper = props => {
  return (
    <Container>
      <SearchText onChangeText={props.onChangeText} value={props.value} />
      <ButtonWrapper onPress={props.onPress}>
        <Text>Click me!</Text>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  background: gray;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`;
const SearchText = styled.TextInput`
  font-size: 20px;
  flex: 0.9;
`;
const ButtonWrapper = styled.TouchableOpacity``;

export default SearchWrapper;
