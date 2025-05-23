import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {Button, GoBackButton, Headder, Txt} from '../../component';
import GlobalStyles, {scale} from '../../constants/globalStyle';
import {Colors, Sizes} from '../../constants';
import DoctorCard from '../../component/doctorCard';
const DoctorAppointment = () => {
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
     <Headder/>
        <ScrollView>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="🔍  Search doctor by name or speciality"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
          <View>
            <DoctorCard />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorAppointment;

const styles = StyleSheet.create({
  contentBox: {
    marginTop: 15,
    backgroundColor: Colors.secondary,
    padding: 20,
    marginHorizontal: Sizes.small,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
  },

});
