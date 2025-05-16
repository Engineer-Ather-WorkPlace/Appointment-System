import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {Button, GoBackButton, Txt} from '../component';
import GlobalStyles, {scale} from '../constants/globalStyle';
import {Colors, Sizes} from '../constants';
import DoctorCard from '../component/doctorCard';
const DoctorAppointment = () => {
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.headerTop}>
        <Txt children={'Life Line Hospital'} color="white" />
        {/* <SvgXml xml={health} width={50} height={50} />        */}
      </View>

      <View style={[GlobalStyles.mainContainer]}>
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
      </View>
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
