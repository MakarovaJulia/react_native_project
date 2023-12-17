import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  HomeScreen: undefined;
  AboutScreen: undefined;
};

type AboutScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'AboutScreen'
>;

type Props = {
  navigation: AboutScreenNavigationProp;
};

const AboutScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontFamily: 'Montserrat-Regular'}}>About Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go to Home screen" />
    </View>
  );
};

export default AboutScreen;
