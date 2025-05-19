
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Headder, Txt, } from '../../component'
import { Colors, GlobalStyles } from '../../constants'

const proceduresAndSurgeries = () => {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      <Headder />

      <ScrollView style={GlobalStyles.scrollViewContainer}>

        <Txt children={'procedures And Surgeries'} />
      </ScrollView>

    </SafeAreaView>
  )
}

export default proceduresAndSurgeries

const styles = StyleSheet.create({

})