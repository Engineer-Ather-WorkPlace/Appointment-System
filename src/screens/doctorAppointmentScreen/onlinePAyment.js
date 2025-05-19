
import { StyleSheet, View, SafeAreaView,  ScrollView } from 'react-native'
import React from 'react'
import { Headder, Txt } from '../../component'

const OnlinePAyment = () => {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

            {/* Header */}
            <Headder />

            <ScrollView style={GlobalStyles.scrollViewContainer} >

                <View style={styles.mainBox}>

                    <View style={styles.appointmentDetails}>
                        <Txt children={'pay'} />
                    </View>
                    </View>
                </ScrollView>
                </SafeAreaView>


  )
}

export default OnlinePAyment

const styles = StyleSheet.create({
     mainBox: {
        width: '100%',
        margin: "auto",

        flexDirection: "column",
        gap: 10,
        borderBlockColor: "blue",
        borderWidth: 2,
    },
})