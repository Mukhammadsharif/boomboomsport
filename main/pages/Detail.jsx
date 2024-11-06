import React, {useContext} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/detail.png';
import Header from '../components/Header';
import {GlobalContext} from '../components/GlobalContext';
import MenuItem from '../components/MenuItem';
import Loading from '../components/Loading';

export default function Detail({route}) {
  const {products, title} = route.params;
  const {translations} = useContext(GlobalContext);
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header text={title} route={'Menu'} />

        {products?.length && translations?.length ? (
          <ScrollView
            contentContainerStyle={globalStyles.scroll}
            style={globalStyles.scrollFlex}>
            {products.map((item, index) => (
              <MenuItem item={item} key={index} translations={translations} />
            ))}
          </ScrollView>
        ) : (
          <Loading />
        )}
      </ImageBackground>
    </View>
  );
}
