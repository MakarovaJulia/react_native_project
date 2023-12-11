import React, {useEffect} from 'react';
import {Button, Linking} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AboutScreen from './src/screens/AboutScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import ChatScreen from './src/screens/ChatScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoScreen from './src/screens/TodoScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DeepLinking} from './src/navigation/DeepLinking';
import Navigation from './src/navigation/Navigation';
import {observer} from 'mobx-react';
import {useRootStore} from './src/hooks/useRootStore';
import {LangType} from './src/modules/lang/LangType';
import {ThemeProvider} from './src/modules/theme/ThemeProvider';
import {useTheme} from './src/modules/theme/hooks/useTheme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {Colors} = useTheme();
  const colors = Colors;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.backgroundPrimary,
        tabBarInactiveBackgroundColor: colors.backgroundPrimary,
        tabBarActiveTintColor: colors.accentPrimary,
        tabBarInactiveTintColor: colors.accentSecondary,
        headerStyle: {backgroundColor: colors.overlay},
        headerTitleStyle: {
          color: colors.textPrimary,
        },
      }}
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="home" size={18} color={colors.accentPrimary} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => (
            <MaterialIcons
              name="newspaper"
              size={18}
              color={colors.accentPrimary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => (
            <MaterialIcons name="chat" size={18} color={colors.accentPrimary} />
          ),
        }}
      />
      <Tab.Screen
        name="TODOs"
        component={TodoScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => (
            <MaterialIcons name="list" size={18} color={colors.accentPrimary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  const {Colors} = useTheme();
  const colors = Colors;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={(props: any) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <MaterialIcons
              name="sunny"
              size={24}
              color={colors.accentPrimary}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => props.navigation.navigate('About')}
              title="About app"
              color={colors.accentPrimary}
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

const App = observer(() => {
  const {langStore} = useRootStore();

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  useEffect(() => {
    langStore.getLang();
  }, [langStore]);

  useEffect(() => {
    langStore.setLang(LangType.RU);
  }, []);

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer
          linking={DeepLinking.linking}
          ref={Navigation.navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name={'Tab'}
              component={TabNavigation}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
});

export default App;
