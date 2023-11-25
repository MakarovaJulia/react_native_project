import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/useRootStore';

const TodoDoneScreen = observer(({navigation}: any) => {
  const {todosStore} = useRootStore();

  const [todos, setTodos] = useState(
    todosStore.actionGetCompleted(todosStore.todosModel) || [],
  );

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleRemoveItem = (index: number) => {
    todosStore.actionChange(index);
    let todos = todosStore.actionGetCompleted(todosStore.todosModel);
    setTodos(todos ? todos : []);
  };

  return (
    <View style={{flex: 1, margin: 8, padding: 16}}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item.index)}>
              <Text>Удалить</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button onPress={() => navigation.goBack()} title="Go to TODOs screen" />
    </View>
  );
});

export default TodoDoneScreen;
