import React, {useContext, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../components/GlobalContext';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {globalStyles} from '../styles';
import {avatars} from '../helpers/avatars';
import Avatars from '../components/Avatars';
import Loading from '../components/Loading';
import CustomButton from '../components/CustomButton';
import BackgroundImage from '../images/backgrounds/account_background.png';
import PolygonIcon from '../images/icons/polygon_icon.png';
import EmptyAvatarImage from '../images/icons/account_empty_icon.png';
import LangChecked from '../images/icons/lang_checked.png';

const {width, height} = Dimensions.get('window');
export default function Profile() {
  const {lang, avatar, name, setName, setLang, translations} =
    useContext(GlobalContext);
  const [avatarModal, setAvatarModal] = useState(false);
  const [language, setLanguage] = useState(false);

  const setNewLanguage = value => {
    setLang(value);
    AsyncStorage.setItem('language', value);
    setLanguage(false);
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header />

        {translations?.length ? (
          <ScrollView
            style={globalStyles.scrollFlex}
            contentContainerStyle={globalStyles.scroll}
            nestedScrollEnabled={true}>
            <TouchableOpacity
              onPress={() => setAvatarModal(true)}
              style={styles.avatarContainer}>
              <ImageBackground
                source={EmptyAvatarImage}
                style={styles.avatarContainerBackground}>
                {avatar ? (
                  <Image
                    source={avatars.find(item => item?.name === avatar)?.image}
                    style={styles.avatarImage}
                  />
                ) : (
                  ''
                )}
              </ImageBackground>
            </TouchableOpacity>

            <CustomButton
              text={
                translations.find(item => item?.en === 'Change avatar')[lang]
              }
              onPress={() => setAvatarModal(true)}
            />
            <TextInput
              style={styles.textInput}
              placeholder={
                translations.find(item => item?.en === 'Your Name')[lang]
              }
              placeholderTextColor={COLORS.blue900}
              value={name}
              onChangeText={value => {
                setName(value);
                AsyncStorage.setItem('name', value);
              }}
            />
            <TouchableOpacity
              style={styles.languagesInputContainer}
              onPress={() => setLanguage(!language)}>
              <View style={styles.languageInput}>
                <Text style={styles.languageText}>
                  {
                    translations.find(item => item?.en === 'Choose Language')[
                      lang
                    ]
                  }
                </Text>

                <Image source={PolygonIcon} style={styles.polygon} />
              </View>
            </TouchableOpacity>
            {language ? (
              <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TouchableOpacity
                    style={lang === 'ru' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('ru')}>
                    <Text style={styles.buttonText}>Русский</Text>
                    {lang === 'ru' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'en' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('en')}>
                    <Text style={styles.buttonText}>English</Text>
                    {lang === 'en' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'es' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('es')}>
                    <Text style={styles.buttonText}>Español</Text>
                    {lang === 'es' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'it' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('it')}>
                    <Text style={styles.buttonText}>Italiano</Text>
                    {lang === 'it' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'de' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('de')}>
                    <Text style={styles.buttonText}>Deutsch</Text>
                    {lang === 'de' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'fr' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('fr')}>
                    <Text style={styles.buttonText}>Français</Text>
                    {lang === 'fr' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'sw' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('sw')}>
                    <Text style={styles.buttonText}>Schweizerisch</Text>
                    {lang === 'sw' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={lang === 'pl' ? styles.activeButton : styles.button}
                    onPress={() => setNewLanguage('pl')}>
                    <Text style={styles.buttonText}>Polski</Text>
                    {lang === 'pl' ? (
                      <Image source={LangChecked} style={styles.langChecked} />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            ) : (
              ''
            )}
          </ScrollView>
        ) : (
          <Loading />
        )}

        {avatarModal ? (
          <Avatars
            modalVisible={avatarModal}
            setModalVisible={setAvatarModal}
            translations={translations}
          />
        ) : (
          ''
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarImage: {
    alignSelf: 'center',
    width: width * 0.4,
    height: width * 0.4,
    objectFit: 'contain',
  },
  scrollView: {
    paddingVertical: 80,
  },
  textInput: {
    width: width * 0.8,
    alignSelf: 'center',
    height: 60,
    marginTop: 100,
    backgroundColor: COLORS.white,
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 24,
    borderRadius: 25,
    paddingLeft: 20,
  },
  languagesInputContainer: {
    width: '100%',
    marginTop: 20,
    position: 'relative',
  },
  languageInput: {
    width: width * 0.8,
    alignSelf: 'center',
    height: 60,
    marginTop: 30,
    backgroundColor: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 24,
    borderRadius: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  polygon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    zIndex: 101,
  },
  content: {
    width: '80%',
    height: '40%',
    alignSelf: 'center',
    backgroundColor: COLORS.activeLangButton,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  activeButton: {
    height: (height * 0.35) / 8,
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.activeLangButton,
  },
  button: {
    height: (height * 0.35) / 8,
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.black,
  },
  languageText: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.blue900,
  },
  activeCircle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: COLORS.green,
  },
  changeAvatarContainer: {
    backgroundColor: COLORS.priceTextColor,
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120,
  },
  changeAvatarText: {
    fontFamily: FONTS.bold,
    color: COLORS.green,
  },
  avatarContainer: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: 'center',
  },
  avatarContainerBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  langChecked: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
});
