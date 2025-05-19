import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Colors, Fonts, GlobalStyles, Sizes } from '../constants';
import { Button, Headder, Txt } from '../component';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from '../component/doctorCard';
import ServiceCard from '../component/serviceCard';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.4;
const specialtySize = width * 0.25;

const ServicesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/* Header */}
      <Headder />

      <ScrollView style={GlobalStyles.scrollViewContainer}>
        
        <View style={styles.section}>

          {/* Lab test and quick surgeries with shadows */}
          <View style={styles.serviceCardContainer}>

            {/* for Lab Test Report */}
            <View style={styles.serviceCardWrapper}>
              <ServiceCard
                img={require('../assets/images/labTest.jpg')}
                title={'Collect Lab Test Report'}
                bgColor={Colors.lightGreen}
                onPress={() => navigation.navigate('GetLabTestReport')}
              />
            </View>

            {/* for Procedure & Surgeries  */}
            <View style={styles.serviceCardWrapper}>
              <ServiceCard
                img={require('../assets/images/surgery.jpg')}
                title={'Quick Procedures & Surgeries'}
                bgColor={Colors.lightGreen}
                onPress={() => { navigation.navigate('QuicProceduresAndSurgeries') }}
              />
            </View>
          </View>

          {/* Doctor appointment card with highlighted discount */}
          <View style={styles.doctorAppointmentCard}>
            <View style={styles.doctorImageWrapper}>
              <Image
                source={require('../assets/images/discountDr.jpg')}
                style={styles.doctorImage}
              />
              <View style={styles.discountOverlay}>
                <Text style={styles.discountText}>Get 20% OFF</Text>
              </View>
            </View>
            <View style={styles.bookButton}>
              <Button
                stylee={{ width: '94%', borderRadius: 14 }}
                children="Book Online Appointment"
                onPress={() => { navigation.navigate('DoctorAppointment') }}
              />
            </View>
          </View>
        </View>

        {/* Doctor Specialties with card styling */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderCard}>
            <Text style={styles.sectionTitle}>I am looking for</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('DoctorAppointment')}
              style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.specialtyGrid}>
            <EnhancedSpecialtyCard icon="🧴" title="Skin Specialist" />
            <EnhancedSpecialtyCard icon="👶" title="Child Specialist" />
            <EnhancedSpecialtyCard icon="👂" title="ENT Specialist" />
            <EnhancedSpecialtyCard icon="🦵" title="Orthopedic Surgeon" />
            <EnhancedSpecialtyCard icon="🩸" title="Diabetes Specialist" />
            <EnhancedSpecialtyCard icon="❤️" title="Cardiologist" />
          </View>
        </View>

        {/* Feedback Section */}
        <TouchableOpacity
          onPress={() => navigation.navigate('feedBack')}>
          <View style={styles.feedbackCardStyle}>
            <Txt style={styles.viewAllText} color={Colors.black} size={Sizes.xxLarge} children={'Submit'} />
            <Image
              source={require('../assets/images/feedback.jpg')}
              style={{ width: '70%', height: 100 }} />
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// Enhanced Specialty Card Component with shadow and border
const EnhancedSpecialtyCard = ({ icon, title }) => {
  return (
    <View style={styles.specialtyCard}>
      <View style={styles.specialtyIconContainer}>
        <Text style={styles.specialtyIcon}>{icon}</Text>

      </View>
      <Text style={styles.specialtyTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  section: {},
  // Enhanced section header with card styling
  sectionHeaderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary,
  },
  viewAllButton: {
    padding: 8,
    // backgroundColor: Colors.lightGreen,
    borderRadius: 6,
  },
  viewAllText: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: Fonts.weight.semiBold,
  },

  serviceCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
  },

  serviceCardWrapper: {
    width: '48%',
  },
  doctorAppointmentCard: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 6,
    backgroundColor: Colors.skyblue,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },

  doctorImageWrapper: {
    width: '100%',
    position: 'relative',
  },

  doctorImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },

  discountOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  discountText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
  },

  bookButton: {
    width: '100%',
    paddingVertical: 4,
    backgroundColor: Colors.white,
    // borderTopWidth: 1,
    // borderColor: Colors.primary,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  serviceDescription: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: '500',
  },
  // Enhanced specialty grid
  specialtyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // Enhanced specialty card with shadow and border
  specialtyCard: {
    width: specialtySize,
    alignItems: 'center',
    marginBottom: Sizes.large,
  },
  specialtyIconContainer: {
    width: specialtySize * 0.8,
    height: specialtySize * 0.8,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  specialtyIcon: {
    fontSize: Sizes.xxxLarge,
  },
  specialtyTitle: {
    fontSize: Sizes.medium,
    fontWeight: '500',
    textAlign: 'center',
  },
  feedbackCardStyle: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderWidth: 1,

    backgroundColor: Colors.lightBlue,

    marginBottom: 26,
  }
});

export default ServicesScreen;