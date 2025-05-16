
import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors, Sizes } from '../../constants';

const InputFeild = ({
  placeholder,
  leftIcon,
  rightIcon,
  bdrWidth = 1,          
  bdrRadius = 8,         
  bdrColor = Colors.secondary,
}) => {
  return (
    <View style={[
      styles.inputFeildContainer, 
      { 
        borderWidth: bdrWidth,
        borderRadius: bdrRadius,
        borderColor: bdrColor  
      }
    ]}>
      {leftIcon && (
        <SvgXml xml={leftIcon} width={20} height={20} style={styles.icon} />
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        numberOfLines={2}
        style={styles.inputFieldStyle}
        
      />

      {rightIcon && (
        <SvgXml xml={rightIcon} width={20} height={20} style={styles.icon} />
      )}
    </View>
  );
};

export default InputFeild;

const styles = StyleSheet.create({
  inputFeildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.lightBlue,
  },
  inputFieldStyle: {
    flex: 1,
    fontSize: Sizes.medium,
    // color: Colors.secondary,
    marginHorizontal: 8, 
  },
  icon: {
    marginHorizontal: 4, }
});