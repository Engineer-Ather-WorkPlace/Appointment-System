
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { GoBackButton, Headder, Txt } from '../component'
import { GlobalStyles } from '../constants'

const GetLabTestReport = () => {
  return (

    <SafeAreaView style={GlobalStyles.safeAreaContainer}>
      <Headder />

      <ScrollView style={GlobalStyles.scrollViewContainer}>

        <Txt children={'Get Lab Test Report'} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default GetLabTestReport

const styles = StyleSheet.create({})