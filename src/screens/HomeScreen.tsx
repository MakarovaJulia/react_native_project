import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {observer} from 'mobx-react';
import {LangType} from '../modules/lang/LangType';
import {useTranslation} from 'react-i18next';
import {useRootStore} from '../hooks/useRootStore';

const HomeScreen = observer(() => {
  const {langStore} = useRootStore();
  const {t} = useTranslation();



  const handleChangeLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU,
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView>
        <View>
          <Text>{t('main.header')}</Text>
          <Button title="Change language" onPress={() => handleChangeLang()} />
        </View>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
