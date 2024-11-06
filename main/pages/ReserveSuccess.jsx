import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../components/GlobalContext';
import {useGetRequest} from '../helpers/hooks';
import {TRANSLATE} from '../helpers/urls';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/detail.png';
import Header from '../components/Header';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import ReserveImage from '../images/icons/boy_ball.png';

const {width, height} = Dimensions.get('window');
export default function ReserveSuccess({route}) {
  const {lang} = useContext(GlobalContext);
  const [translations, setTranslations] = useState([]);
  const getLanguagesRequest = useGetRequest({url: TRANSLATE});

  const getLanguages = async () => {
    const {response} = await getLanguagesRequest.request();
    if (response?.length) {
      setTranslations(response);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header />

        <View style={styles.main}>
          <View style={styles.qrContainer}>
            <Image source={ReserveImage} style={styles.qrImage} />
          </View>

          {translations?.length ? (
            <Text style={styles.emptyTitle}>
              {
                translations.find(
                  item =>
                    item?.en === 'Your table has been successfully booked!',
                )[lang]
              }
            </Text>
          ) : (
            ''
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    width: width / 2.5,
    height: width / 2.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  qrImage: {
    width: width / 1.2,
    height: width / 1.2,
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    color: COLORS.green,
    fontFamily: FONTS.bold,
    fontSize: 25,
    lineHeight: 32,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
    fontWeight: 'bold',
  },
  main: {
    height: height / 2,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  emptyTitle: {
    color: COLORS.black,
    fontSize: 32,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    backgroundColor: COLORS.white,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 25,
    marginTop: 80,
  },
});
