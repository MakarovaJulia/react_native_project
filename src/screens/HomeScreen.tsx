import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import {observer} from 'mobx-react';
import {LangType} from '../modules/lang/LangType';
import {useTranslation} from 'react-i18next';
import {useRootStore} from '../hooks/useRootStore';
import {IColors, ThemeTypes} from '../modules/theme/ThemeTypes';
import {useTheme} from '../modules/theme/hooks/useTheme';

const HomeScreen = observer(() => {
  const {Colors, selectTheme, changeTheme} = useTheme();

  const styles = useStyles(Colors);

  const {langStore} = useRootStore();
  const {t} = useTranslation();

  const handleChangeLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU,
    );
  };

  const handleChangeTheme = async () => {
    changeTheme(
      selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT,
    );
  };

  return (
    <View style={[styles.container]}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.content]}>
          <Text style={styles.titleText}>{t('main.header')}</Text>
          <TouchableOpacity
            style={[styles.buttonFirst]}
            onPress={() => handleChangeLang()}>
            <Text style={styles.mainText}>{t('main.homeScreen.btnLang')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonFirst]}
            onPress={() => handleChangeTheme()}>
            <Text style={styles.mainText}>{t('main.homeScreen.btnTheme')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
});

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.backgroundPrimary,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      color: colors.textPrimary,
      fontSize: 20,
      fontFamily: 'Montserrat-Regular'
    },
    mainText: {
      color: colors.textPrimary,
      fontSize: 15,
      fontFamily: 'Montserrat-Regular'
    },
    buttonFirst: {
      width: 160,
      height: 50,
      borderRadius: 2,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonPrimary,
    },
  });

export default HomeScreen;
