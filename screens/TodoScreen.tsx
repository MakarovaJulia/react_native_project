import React, {useEffect, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import TodoItem from '../components/ToDoLine/TodoItem';
import {useRootStore} from '../hooks/useRootStore';
import {observer} from 'mobx-react';

const TodoScreen = observer(() => {
  const [text, setText] = useState('');
  const modalRef = useRef<Modalize | null>(null);

  const {todosStore} = useRootStore();

  useEffect(() => {
    todosStore.getTodoObjectFromService();
  }, [todosStore]);

  const addItem = () => {
    const index = todosStore.todosModel.todoList?.length ?? 0;
    todosStore.actionAdd({
      text,
      completed: false,
      index: index,
    });
    setText('');
  };

  const toggleItem = (index: number) => {
    todosStore.actionChange(index);
  };

  const removeItem = (index: number) => {
    todosStore.actionDelete(index);
  };

  const keyExtractor = (index: number) => {
    return index.toString();
  };

  const alertFunction = (index: number) => {
    return Alert.alert('Do you really want to', 'Delete', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Canceled');
        },
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => removeItem(index)},
    ]);
  };

  const modalFunction = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  const getTodos = () =>
    todosStore.todosModel === undefined
      ? []
      : todosStore.actionGetCompleted(todosStore.todosModel);

  const renderItem = ({item, index}: any) => (
    <View key={index}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>NEW:</Text>
        {todosStore.todosModel && !todosStore.isLoading ? (
          <FlatList
            data={todosStore.todosModel.todoList}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item, index}) => (
              <TodoItem
                item={item}
                index={index}
                removeItem={alertFunction}
                toggleItem={toggleItem}
              />
            )}
          />
        ) : (
          <ActivityIndicator />
        )}
        <>
          <Modalize
            ref={modalRef}
            modalTopOffset={300}
            closeOnOverlayTap
            disableScrollIfPossible={false}
            withHandle={false}
            childrenStyle={{
              padding: 16,
            }}
            modalStyle={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
            overlayStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            }}
            flatListProps={{
              data: getTodos(),
              keyExtractor: item => item.text,
              renderItem: renderItem,
              showsVerticalScrollIndicator: false,
            }}
          />
        </>
        <TextInput
          style={styles.textInput}
          onChangeText={newText => setText(newText)}
          value={text}
        />
        <Button title=" ADD " onPress={() => addItem()} />
        <Button onPress={modalFunction} title="Go to done TODOs screen" />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  todoLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    margin: 8,
  },
  textInput: {
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  todoLineTouch: {},
});

export default TodoScreen;
