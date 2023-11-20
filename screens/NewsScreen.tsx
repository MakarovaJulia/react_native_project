import {View, Text} from 'react-native';
import {observer} from 'mobx-react';

const NewsScreen = observer(({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>News</Text>
    </View>
  );
});

export default NewsScreen;
