
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Txt } from '../../component';
import { GlobalStyles, Sizes } from '../../constants';

const Headder = () => {
  return (
    <View style={GlobalStyles.headerTop}>
      <Txt
        children={'Life Line Hospital'}
        mt={10}
        size={Sizes.large}
        color="white"
      />
    </View>
  );
};

export default Headder;
