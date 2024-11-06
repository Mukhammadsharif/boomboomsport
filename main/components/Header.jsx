import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../helpers/colors';
import DrawerIcon from '../images/icons/menu_icon.png';
import BackIcon from '../images/icons/back_icon.png';

export default function Header({
  background,
  back = true,
  drawer = true,
  route = null,
  text,
}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      {back ? (
        <TouchableOpacity
          onPress={() => {
            if (route) {
              navigation.navigate(route);
            } else {
              navigation.goBack();
            }
          }}
          style={styles.backContainer}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      {text ? <Text style={styles.text}>{text.toUpperCase()}</Text> : ''}

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {drawer ? <Image source={DrawerIcon} style={styles.drawerIcon} /> : ''}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 45 : 20,
  },
  backIcon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
  },
  drawerIcon: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  backContainer: {},
  backText: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.brown,
    lineHeight: 28,
  },
  text: {
    color: COLORS.black,
    fontSize: 40,
    fontFamily: FONTS.bold,
  },
});
