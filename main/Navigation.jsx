import React, {useContext} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {GlobalContext} from './components/GlobalContext';
import {COLORS, FONTS} from './helpers/colors';
import Main from './pages/Main';
import Profile from './pages/Profile';
import BackgroundImage from './images/backgrounds/drawer.png';
import CloseIcon from './images/icons/close_icon.png';
import MenuBackgroundImage from './images/backgrounds/menu_background.png';
import Menu from './pages/Menu';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import CartSuccess from './pages/CartSuccess';
import Reserve from './pages/Reserve';
import ReserveSuccess from './pages/ReserveSuccess';
import Translations from './pages/Translations';
import Events from './pages/Events';
import Evening from './pages/Evening';
import Terrace from './pages/Terrace';
import Presentation from './pages/Presentation';
import Mascot from './pages/Mascot';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={DrawerNavigator} name="DrawerNavigator" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Detail" component={Detail} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CartSuccess" component={CartSuccess} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="ReserveSuccess" component={ReserveSuccess} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Evening" component={Evening} />
      <Drawer.Screen name="Terrace" component={Terrace} />
      <Drawer.Screen name="Presentation" component={Presentation} />
      <Drawer.Screen name="Mascot" component={Mascot} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  const {lang, translations} = useContext(GlobalContext);

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      {translations.length ? (
        <ImageBackground source={BackgroundImage} style={styles.container}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <Image source={CloseIcon} style={styles.close} />
            </TouchableOpacity>
          </View>

          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Home')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Menu')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>{menuTranslation[lang]}</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Reserve')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Booking')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Events')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Events')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Translations')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Broadcasts')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Cart')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.drawerItem}>
              <ImageBackground
                source={MenuBackgroundImage}
                style={styles.drawerImage}
                imageStyle={styles.drawerImageStyle}>
                <Text style={styles.itemText}>
                  {translations.find(item => item?.en === 'Account')[lang]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        ''
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  drawerLogo: {
    width: width / 1.5,
    height: width / 1.5,
    objectFit: 'contain',
    alignSelf: 'flex-end',
  },
  mainContainer: {
    marginTop: height / 7,
    width: width,
    alignItems: 'flex-start',
  },
  drawerItem: {
    height: 60,
    marginTop: 15,
    width: '60%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  itemText: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 30,
    height: 30,
  },
  drawerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerImageStyle: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});

const menuTranslation = {
  de: 'Menü',
  en: 'Menu',
  es: 'Menú',
  fr: 'Menu',
  it: 'Menu',
  pl: 'Menu',
  ru: 'Меню',
  sw: 'Menyu',
};
