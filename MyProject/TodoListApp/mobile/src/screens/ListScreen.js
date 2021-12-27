import React, {useState} from 'react';
import {Text, Button, Alert} from 'react-native';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchWrapper from '../components/SearchWrapper';
import ListItem from '../components/ListItem';

const ListScreen = props => {
  const [TotalCount, setTotalCount] = useState(4);
  const [Title, setTitle] = useState('');
  const [Todo, setTodo] = useState([
    {
      key: 0,
      title: 'Kotlin',
      count: 0,
    },
    {
      key: 1,
      title: 'swift',
      count: 0,
    },
    {
      key: 2,
      title: 'Java',
      count: 0,
    },
    {
      key: 3,
      title: 'C++',
      count: 0,
    },
  ]);

  // Todo배열의 마지막 아이템의 key값의 + 1을 해줌으로써 key중복 방지.
  const ButtonClick = () => {
    let tempObj = {
      key: Todo[Todo.length - 1].key + 1,
      title: Title,
      count: 0,
    };
    console.log(Title);
    setTodo(Todo.concat(tempObj));
    setTotalCount(TotalCount + 1);
    setTitle('');
  };
  const InputHandler = value => {
    setTitle(value);
  };

  const addHandler = item => {
    let tempObj = {
      key: item.key,
      title: item.title,
      count: item.count + 1,
    };
    console.log(tempObj);
    // tempArray라는 변수로 Todo.map을 이용해 새로운 배열을 만들면서 ele라는 변수를 갖고 그 안에서 맞는 item을 찾는 개념..
    // 찾아서 tempObj를 통해 맞는 아이템의 count로 늘려주고 setTodo를 통해 Todo배열 재정의.
    let tempArray = Todo.map(ele => (ele.key === item.key ? tempObj : ele));
    console.log(tempArray);
    setTodo(tempArray);
  };

  const subHandler = item => {
    console.log(item);
    if (item.count > 0) {
      let tempObj = {
        key: item.key,
        title: item.title,
        count: item.count - 1,
      };
      let tempArray = Todo.map(ele => (ele.key === item.key ? tempObj : ele));
      setTodo(tempArray);
    } else {
      Alert.alert('오류');
    }
  };

  const delHandler = item => {
    // 선태된 item의 key와 Todo배열 안의 key와 맞지 않는것들만(선택되지 않은 것) 새 배열로 추출
    let tempArray = Todo.filter(ele => ele.key !== item.key);
    console.log(tempArray);
    setTodo(tempArray);
    setTotalCount(TotalCount - 1);
  };

  return (
    // Todo.map으로 선언했기에 ListItem들이 Todo의 배열을 통해 각각 key와 value값을 갖게 되는 것.
    // item을 선언해준 이유? => 선언을 안 해도 되지만 각각의 요소를 item으로 인식하고 사용하기 위함 (add, sub와 같은 함수에서 item을 쓰기 위함)
    // value를 선언해준 이유? => textInput의 값을 Title로 설정함으로써 click버튼을 눌렀을 시 값이 초기화 되게 함으로써 값을 지정해준 것.
    <Container>
      <Header countTitle={TotalCount} />
      <SearchWrapper
        onChangeText={InputHandler}
        value={Title}
        onPress={ButtonClick}
      />
      {Todo.map(item => (
        <ListItem
          key={item.key}
          item={item}
          addHandler={addHandler}
          subHandler={subHandler}
          delHandler={delHandler}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  padding-top: 30px;
`;

export default ListScreen;
