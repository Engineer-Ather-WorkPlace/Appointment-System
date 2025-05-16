import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Colors, Sizes } from '../../constants';

const DoctorData = [
  {
    id: 1,
    name: 'Dr. Tariq Zia',
    speciality: 'Cardiologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 2,
    name: 'Dr.Iftikhar Haider',
    speciality: 'Internal Medicine',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 3,
    name: 'Dr.Iftikhar Haider',
    speciality: 'Internal Medicine',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 5,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 6,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 7,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 8,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 9,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
  {
    id: 10,
    name: 'Dr.Raheel Saleem',
    speciality: 'Gyanecologist',
    image: require('../../assets/images/Dr.tariqZia.png'),
  },
];

const DoctorCard = () => {
  return (
    <View>
      {DoctorData.map(item => (
        <View key={item.id} style={styles.card}>
          <Image
            source={item.image}
            style={styles.image}
            width={70}
            height={70}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.speciality}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.viewProfileButton}>
                <Text>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Book Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.blueCard,
    padding: 16,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.gray,
    // borderWidth: 1,
    
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  time: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  button: {
    marginTop: 8,
    backgroundColor: Colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  viewProfileButton: {
    marginTop: 8,
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.white,
    alignSelf: 'flex-start',
  },
});
