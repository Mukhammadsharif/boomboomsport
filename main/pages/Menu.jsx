import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/menu.png';
import Header from '../components/Header';
import {GlobalContext} from '../components/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import {useGetRequest} from '../helpers/hooks';
import {PRODUCTS} from '../helpers/urls';
import BallImage from '../images/icons/category_ball.png';
import {toCapitalize} from '../helpers/functions';
import {COLORS, FONTS} from '../helpers/colors';

const {width, height} = Dimensions.get('window');
export default function Menu() {
  const navigation = useNavigation();
  const {translations, lang, refresh, setRefresh} = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const getProductsRequest = useGetRequest({url: PRODUCTS});

  const getProducts = async () => {
    const {response} = await getProductsRequest.request();
    if (response?.length) {
      setProducts(response);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header />
        {translations?.length ? (
          <ScrollView
            style={globalStyles.scrollFlex}
            contentContainerStyle={globalStyles.scroll}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate('Detail', {
                  products: products.filter(pro => pro.type === 'salads'),
                  title: translations.find(item => item?.en === 'salads')[lang],
                });
                setRefresh(!refresh);
              }}>
              <ImageBackground
                source={BallImage}
                style={styles.image}
                imageStyle={styles.imageStyle}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {toCapitalize(
                      translations.find(item => item?.en === 'salads')[lang],
                    )}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate('Detail', {
                  products: products.filter(pro => pro.type === 'starters'),
                  title: translations.find(item => item?.en === 'starters')[
                    lang
                  ],
                });
                setRefresh(!refresh);
              }}>
              <ImageBackground
                source={BallImage}
                style={styles.image}
                imageStyle={styles.imageStyle}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {toCapitalize(
                      translations.find(item => item?.en === 'starters')[lang],
                    )}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate('Detail', {
                  products: products.filter(pro => pro.type === 'desserts'),
                  title: translations.find(item => item?.en === 'desserts')[
                    lang
                  ],
                });
                setRefresh(!refresh);
              }}>
              <ImageBackground
                source={BallImage}
                style={styles.image}
                imageStyle={styles.imageStyle}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {toCapitalize(
                      translations.find(item => item?.en === 'desserts')[lang],
                    )}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate('Detail', {
                  products: products.filter(pro => pro.type === 'drinks'),
                  title: translations.find(item => item?.en === 'drinks')[lang],
                });
                setRefresh(!refresh);
              }}>
              <ImageBackground
                source={BallImage}
                style={styles.image}
                imageStyle={styles.imageStyle}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {toCapitalize(
                      translations.find(item => item?.en === 'drinks')[lang],
                    )}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          ''
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width * 0.5,
    height: width * 0.4,
    marginTop: 10,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    objectFit: 'contain',
  },
  textContainer: {
    height: 45,
    backgroundColor: COLORS.white,
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    fontFamily: FONTS.bold,
    color: COLORS.blue500,
    fontSize: 24,
  },
});
