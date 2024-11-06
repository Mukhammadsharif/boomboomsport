import React, {useContext} from 'react';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {ImageBackground, View} from 'react-native';
import {GlobalContext} from '../components/GlobalContext';

export default function Terrace() {
  const {lang} = useContext(GlobalContext);

  const images = {
    en: require('../images/screen_images/en_terrace.png'),
    ru: require('../images/screen_images/ru_terrace.png'),
    es: require('../images/screen_images/es_terrace.png'),
    it: require('../images/screen_images/it_terrace.png'),
    de: require('../images/screen_images/de_terrace.png'),
    fr: require('../images/screen_images/fr_terrace.png'),
    sw: require('../images/screen_images/de_terrace.png'),
    pl: require('../images/screen_images/pl_terrace.png'),
  };
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={images[lang]} style={globalStyles.container}>
        <Header route={'Events'} />
      </ImageBackground>
    </View>
  );
}
