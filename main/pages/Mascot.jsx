import React, {useContext} from 'react';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {ImageBackground, View} from 'react-native';
import {GlobalContext} from '../components/GlobalContext';

export default function Mascot() {
  const {lang} = useContext(GlobalContext);

  const images = {
    en: require('../images/screen_images/en_mascot.png'),
    ru: require('../images/screen_images/ru_mascot.png'),
    es: require('../images/screen_images/es_mascot.png'),
    it: require('../images/screen_images/it_mascot.png'),
    de: require('../images/screen_images/de_mascot.png'),
    fr: require('../images/screen_images/fr_mascot.png'),
    sw: require('../images/screen_images/de_mascot.png'),
    pl: require('../images/screen_images/pl_mascot.png'),
  };
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={images[lang]} style={globalStyles.container}>
        <Header route={'Events'} />
      </ImageBackground>
    </View>
  );
}
