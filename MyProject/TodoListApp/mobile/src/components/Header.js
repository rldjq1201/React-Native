import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Header = props => {
  return (
    <Container>
      <HeaderText>Todo List</HeaderText>
      <CountText>
        {'  '}
        {props.countTitle}
      </CountText>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;
const HeaderText = styled.Text`
  font-size: 25px;
`;
const CountText = styled.Text`
  font-size: 25px;
`;

export default Header;
