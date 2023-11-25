import React from 'react';
import {Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {observer} from 'mobx-react';

const HomeScreen = observer(() => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView>
        <View>
          <Text>Home screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
