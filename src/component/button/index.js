import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Colors, Fonts, Sizes } from '../../constants';
const Button = ({
  children = 'submit',
  onPress,
  bgColor = Colors.secondary,
  clr = Colors.white,
  fntweight = Fonts.weight.bold,
  fntsize = Sizes.medium,
  leftIcon,
  rightIcon,
  stylee,
  bdr = 1,
}) => {
  const allStyles = [
    { backgroundColor: bgColor },
    { borderWidth: bdr },
    { color: clr },
  ];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.buttonStyle, allStyles, stylee]}>

      {/* left icon */}
      {leftIcon && <SvgXml xml={leftIcon} width={20} height={20} />}

      {/* button text */}
      <Text style={{ fontWeight: fntweight, fontSize: fntsize, color: clr }}>{children}</Text>

      {/* right icon */}
      {rightIcon && <SvgXml xml={rightIcon} width={20} height={20} />}
    </TouchableOpacity>
  );
};
export default Button;

const Styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: Sizes.small,
    // borderColor: Colors.primary,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
});
