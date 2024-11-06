import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/detail.png';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../components/GlobalContext';
import {usePostRequest} from '../helpers/hooks';
import {ORDER} from '../helpers/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';
import CartItem from '../components/CartItem';
import {currency} from '../helpers/avatars';
import Loading from '../components/Loading';
import {COLORS, FONTS} from '../helpers/colors';
import BoyBall from '../images/icons/boy_ball.png';

export default function Cart() {
  const navigation = useNavigation();
  const {lang, refresh, setRefresh, translations} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const orderRequest = usePostRequest({url: ORDER});

  const order = async () => {
    setLoading(true);
    const {response} = await orderRequest.request();
    if (response) {
      await AsyncStorage.setItem('cartList', '');
      navigation.navigate('CartSuccess', {qrImage: response?.res});
      setLoading(false);
      setRefresh(!refresh);
    }
  };

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container} source={BackgroundImage}>
        <Header />

        {cart && cart.length && translations?.length ? (
          <>
            <Text style={styles.title}>
              {translations.find(item => item?.en === 'Order')[lang]}:
            </Text>

            <View style={styles.main}>
              <ScrollView
                style={globalStyles.scrollFlex}
                contentContainerStyle={globalStyles.scroll}>
                {cart.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}

                <View style={styles.currency}>
                  <Text style={styles.priceTitle}>
                    {
                      translations.find(item => item?.en === 'Total Amount')[
                        lang
                      ]
                    }
                    :
                  </Text>
                  <Text style={styles.price}>
                    {price} {currency}
                  </Text>
                </View>
              </ScrollView>
            </View>

            <CustomButton
              text={translations.find(item => item?.en === 'Place Order')[lang]}
              onPress={() => order()}
              style={{marginTop: 30}}
            />
          </>
        ) : translations?.length ? (
          <View>
            <Image source={BoyBall} style={styles.boyBall} />
            <Text style={styles.emptyTitle}>
              {
                translations.find(item => item?.en === 'Your cart is empty')[
                  lang
                ]
              }
            </Text>
          </View>
        ) : (
          ''
        )}

        {!translations?.length || loading ? <Loading /> : ''}
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
    fontSize: 40,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingLeft: 40,
  },
  main: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'flex-start',
    marginTop: 20,
    height: '60%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    padding: 10,
  },
  currency: {
    borderRadius: 12,
    marginTop: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  priceTitle: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 30,
    marginTop: 20,
  },
  price: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 28,
    marginTop: 8,
  },
  boyBall: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
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
  },
});
