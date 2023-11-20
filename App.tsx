import React from 'react';
import {Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import ChatScreen from './screens/ChatScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoScreen from './screens/TodoScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="home" size={18} />,
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <MaterialIcons name="newspaper" size={18} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <MaterialIcons name="chat" size={18} />,
        }}
      />
      <Tab.Screen
        name="TODOs"
        component={TodoScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <MaterialIcons name="list" size={18} />,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={(props: any) => ({
          headerTitleAlign: 'center',
          headerTitle: () => <MaterialIcons name="sunny" size={24} />,
          headerRight: () => (
            <Button
              onPress={() => props.navigation.navigate('About')}
              title="About app"
              color="#000"
            />
          ),
        })}
      />
      <Stack.Screen
        name={'About'}
        component={AboutScreen}
        initialParams={{itemId: 42}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Tab'}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
