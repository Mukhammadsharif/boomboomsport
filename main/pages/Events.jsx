import React, {useContext} from 'react';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/detail.png';
import Header from '../components/Header';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {GlobalContext} from '../components/GlobalContext';
import Loading from '../components/Loading';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';

export default function Events() {
  const navigation = useNavigation();
  const {lang, translations} = useContext(GlobalContext);

  const languages = {
    basketballEvening: {
      de: 'Basketballabend',
      en: 'Basketball Evening',
      es: 'Noche de baloncesto',
      fr: 'Soirée de basket',
      it: 'Serata di basket',
      pl: 'Wieczór koszykówki',
      ru: 'Баскетбольный вечер',
      sw: 'Jioni ya mpira wa kikapu',
    },
    creatingMascot: {
      de: 'Maskottchen für das Basketballteam erstellen',
      en: 'Creating a mascot for the basketball team',
      es: 'Creando una mascota para el equipo de baloncesto',
      fr: 'Création d’une mascotte pour l’équipe de basket',
      it: 'Creazione di una mascotte per la squadra di basket',
      pl: 'Tworzenie maskotki dla drużyny koszykówki',
      ru: 'Создаем маскота для баскетбольной команды',
      sw: 'Kuunda nembo ya timu ya mpira wa kikapu',
    },
    breakfastTerrace: {
      de: 'Frühstück auf der Terrasse',
      en: 'Breakfast on the Terrace',
      es: 'Desayuno en la terraza',
      fr: 'Petit déjeuner sur la terrasse',
      it: 'Colazione sulla terrazza',
      pl: 'Śniadanie na tarasie',
      ru: 'Завтрак на террасе',
      sw: 'Kiamsha kinywa kwenye mtaro',
    },
    molecularMenuPresentation: {
      de: 'Präsentation des molekularen Menüs',
      en: 'Molecular Menu Presentation',
      es: 'Presentación del menú molecular',
      fr: 'Présentation du menu moléculaire',
      it: 'Presentazione del menu molecolare',
      pl: 'Prezentacja menu molekularnego',
      ru: 'Презентация молекулярного меню',
      sw: 'Uwasilishaji wa menyu ya molekuli',
    },
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header />

        {translations?.length ? (
          <>
            <ScrollView
              style={globalStyles.scrollFlex}
              contentContainerStyle={globalStyles.scroll}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Evening')}>
                <Text style={styles.name}>
                  {languages.basketballEvening[lang]}
                </Text>
                <Text style={styles.date}>28/11 {'\n'} 21:00</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Mascot')}>
                <Text style={styles.name}>
                  {languages.creatingMascot[lang]}
                </Text>
                <Text style={styles.date}>28/11 {'\n'} 14:00</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Terrace')}>
                <Text style={styles.name}>
                  {languages.breakfastTerrace[lang]}
                </Text>
                <Text style={styles.dateSecond}>29/11 {'\n'} 10:00</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Presentation')}>
                <Text style={styles.name}>
                  {languages.molecularMenuPresentation[lang]}
                </Text>
                <Text style={styles.dateSecond}>29/11 {'\n'} 19:00</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        ) : (
          <Loading />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: COLORS.brownFill,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    lineHeight: 32,
    fontFamily: FONTS.bold,
    color: COLORS.brown,
  },
  scrollView: {
    alignItems: 'center',
  },
  container: {
    marginTop: 50,
    height: 100,
    width: '90%',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 22,
    marginTop: 15,
    textAlign: 'center',
  },
  date: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 25,
    backgroundColor: '#5930FF',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  dateSecond: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 25,
    backgroundColor: COLORS.input,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
