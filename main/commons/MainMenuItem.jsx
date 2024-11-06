import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../helpers/colors';

export default function MainMenuItem({
  text,
  route,
  style = {},
  textStyle = {},
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, {...style}]}
      onPress={() => navigation.navigate(route)}>
      <Text style={[styles.text, {...textStyle}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: COLORS.blue300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    height: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 32,
    fontFamily: FONTS.extraBold,
    color: COLORS.blue900,
  },
});
