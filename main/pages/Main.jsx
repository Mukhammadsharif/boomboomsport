import React, {useContext} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import {GlobalContext} from '../components/GlobalContext';
import BackgroundImage from '../images/backgrounds/main.png';
import MainMenuItem from '../commons/MainMenuItem';
import Loading from '../components/Loading';
import {COLORS} from '../helpers/colors';

export default function Main() {
  const {lang, translations} = useContext(GlobalContext);
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <View style={styles.main}>
          <ScrollView
            contentContainerStyle={globalStyles.scroll}
            style={globalStyles.scrollFlex}>
            {translations?.length ? (
              <>
                <MainMenuItem
                  style={{backgroundColor: COLORS.blue900}}
                  textStyle={{color: COLORS.blue300}}
                  text={translations.find(item => item?.en === 'Home')[lang]}
                  route={'Main'}
                />

                <MainMenuItem
                  text={translations.find(item => item?.en === 'Cart')[lang]}
                  route={'Cart'}
                />

                <MainMenuItem text={menuTranslation[lang]} route={'Menu'} />

                <MainMenuItem
                  text={translations.find(item => item?.en === 'Booking')[lang]}
                  route={'Reserve'}
                />

                <MainMenuItem
                  text={translations.find(item => item?.en === 'Events')[lang]}
                  route={'Events'}
                />

                <MainMenuItem
                  text={
                    translations.find(item => item?.en === 'Broadcasts')[lang]
                  }
                  route={'Translations'}
                />

                <MainMenuItem
                  text={translations.find(item => item?.en === 'Account')[lang]}
                  route={'Profile'}
                />
              </>
            ) : (
              <Loading />
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height / 2.1,
  },
});

const menuTranslation = {
  de: 'Menü',
  en: 'Menu',
  es: 'Menú',
  fr: 'Menu',
  it: 'Menu',
  pl: 'Menu',
  ru: 'Меню',
  sw: 'Menyu',
};
