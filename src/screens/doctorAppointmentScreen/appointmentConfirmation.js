
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants'
import { Button, Headder, Txt } from '../../component'
import { width } from '../../constants/globalStyle'

const AppointmentConfirmation = () => {
    return (

        <SafeAreaView style={GlobalStyles.safeAreaContainer}>

            {/* Header */}
            <Headder />

            <ScrollView style={GlobalStyles.scrollViewContainer} >

                <View style={styles.mainBox}>

                    <View style={styles.appointmentDetails}>
                        <Txt children={'Appointment Confirmation'} />
                    </View>

                    <View style={styles.pymentOptionBox}>
                        <Button children='Pay on Visit' />
                        <Button children='Online Payment' />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default AppointmentConfirmation

const styles = StyleSheet.create({

    mainBox: {
        width: '100%',
        margin: "auto",

        flexDirection: "column",
        gap: 10,
        borderBlockColor: "blue",
        borderWidth: 2,
    },

    appointmentDetails: {
        flex: 1,
        // backgroundColor: "green"

    },

    pymentOptionBox: {
        //    backgroundColor:"red",
        borderBlockColor: "blue",
        borderWidth: 2,
        flexDirection: "column",
        gap: 10,
    }
})