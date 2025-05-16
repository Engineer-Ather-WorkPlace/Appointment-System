import { SafeAreaView, StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../constants'
import { SvgXml } from 'react-native-svg'
import { logo, health } from '../assets/images'
import { Txt } from '../component'
import React, { useEffect } from 'react'
import { scale } from '../constants/globalStyle'
import { Animated } from 'react-native'

// counter to navigate landing page to services Screen
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("servicesScreen");
    }, 1600);
  });

  // animation
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (

    <SafeAreaView style={GlobalStyles.safeArea}>

      <View style={[GlobalStyles.mainContainer, { justifyContent: "center", }]}>

        <View style={{ transform: [{ scale }] }}>

          <Animated.View style={[styles.logo, { opacity: fadeAnim }]}>
            <SvgXml xml={health} width={250} height={250} />
          <Txt children={"LifeLine Hospital"} />
          </Animated.View>


          <View>

          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({

  logo: {
    // flex:1,
    margin: "auto",
  }
})

