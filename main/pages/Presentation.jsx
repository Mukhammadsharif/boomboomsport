import React, {useContext} from 'react';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {ImageBackground, View} from 'react-native';
import {GlobalContext} from '../components/GlobalContext';

export default function Presentation() {
  const {lang} = useContext(GlobalContext);

  const images = {
    en: require('../images/screen_images/en_pres.png'),
    ru: require('../images/screen_images/ru_pres.png'),
    es: require('../images/screen_images/es_pres.png'),
    it: require('../images/screen_images/it_pres.png'),
    de: require('../images/screen_images/de_pres.png'),
    fr: require('../images/screen_images/fr_pres.png'),
    sw: require('../images/screen_images/de_pres.png'),
    pl: require('../images/screen_images/pl_pres.png'),
  };
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={images[lang]} style={globalStyles.container}>
        <Header route={'Events'} />
      </ImageBackground>
    </View>
  );
}
