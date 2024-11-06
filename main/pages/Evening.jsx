import React, {useContext} from 'react';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {ImageBackground, View} from 'react-native';
import {GlobalContext} from '../components/GlobalContext';

export default function Evening() {
  const {lang} = useContext(GlobalContext);

  const images = {
    en: require('../images/screen_images/en_evening.png'),
    ru: require('../images/screen_images/ru_evening.png'),
    es: require('../images/screen_images/es_evening.png'),
    it: require('../images/screen_images/it_evening.png'),
    de: require('../images/screen_images/de_evening.png'),
    fr: require('../images/screen_images/fr_evening.png'),
    sw: require('../images/screen_images/de_evening.png'),
    pl: require('../images/screen_images/pl_evening.png'),
  };
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={images[lang]} style={globalStyles.container}>
        <Header route={'Events'} />
      </ImageBackground>
    </View>
  );
}
