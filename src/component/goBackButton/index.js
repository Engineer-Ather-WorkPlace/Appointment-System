
// import { StyleSheet, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import { SvgXml } from 'react-native-svg';
// import { goBackButton } from '../../assets/images';
// import { Colors } from '../../constants';

// const GoBackButton = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.button}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <SvgXml xml={goBackButton}/>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default GoBackButton;

// const styles = StyleSheet.create({
//   button: {
//     borderColor: Colors.gray,
//     // backgroundColor:"red",
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//   },
//   img: {
//     width: 20,
//     height: 20,
//   },
// });
// ---------------------

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { goBackButton } from '../../assets/images';
import { Colors } from '../../constants';

const GoBackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      console.warn('No screen to go back to.');
      navigation.navigate("Splash"); // fallback
    }
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={handleGoBack}>
        <SvgXml xml={goBackButton} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.gray,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  img: {
    width: 20,
    height: 20,
  },
});
