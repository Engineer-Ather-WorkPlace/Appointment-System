
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, View, SafeAreaView, Alert } from 'react-native';
import Txt from "../index"
import { GlobalStyles } from '../../constants';
import InputFeild from "../index"
import Button from "../index"
import { phone, profile } from '../../assets/images/index';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    department: '',
    rating: '',
    message: '',
  });

  const handleInputChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const submitForm = () => {
    const { name, department, rating, message } = formData;

    if (!name || !department || !rating || !message) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    Alert.alert('Feedback Submitted', 'Thank you for your feedback!');
    console.log('Form Data:', formData);
  };

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.headerTop}>
        <Txt color="white">Life Line Hospital</Txt>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

<View style={{ flex:1, gap:50}}>

        {/* <View>
          <Image source={require('../../assets/images/userfeedback.jpg')}
            style={{ width: '100%', height: 200 }} />
        </View> */}

        



        <View style={styles.form}>
          <InputFeild
            leftIcon={profile}
            placeholder="Full Name *"
            value={formData.name}
            onChangeText={text => handleInputChange('name', text)}
            />

          <InputFeild
            leftIcon={phone}
            placeholder="Contact (optional)"
            value={formData.contact}
            onChangeText={text => handleInputChange('contact', text)}
          />

          <InputFeild
            // leftIcon={}
            placeholder="Your Feedback *"
            value={formData.message}
            onChangeText={text => handleInputChange('message', text)}
            multiline={true}
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: 'top' }} // ensures top alignment
          />

          <Button children='Submit' onPress={submitForm} />
        </View>
            </View>

            <Txt children={"Your voice matters to us. Every feedback helps us serve you better, we are committed to improving with your input "}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  form: {
    flex: 1,
    gap: 20,
  },
});
