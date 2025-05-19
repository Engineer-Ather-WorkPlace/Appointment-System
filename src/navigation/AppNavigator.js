import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import ServicesScreen from "../screens/servicesScreen";
import GetLabTestReport from "../screens/labTestReport";
import StaffVisitBooking from "../screens/staffVisitBooking"
import DoctorAppointment from "../screens/doctorAppointmentScreen/allDoctorList";
import FeedBack from "../screens/feedBack/feedBack";
import proceduresAndSurgeries from "../screens/proceduresAndSurgeries/proceduresAndSurgeries";
import AppointmentConfirmation from "../screens/doctorAppointmentScreen/appointmentConfirmation";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="servicesScreen" component={ServicesScreen} screenOptions={{headerShown:true}}/>
        
        {/* routes for services screen */}
        <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} screenOptions={{headerShown:true}}/>
        <Stack.Screen name='AppointmentConfirmation' component={AppointmentConfirmation}/>
        <Stack.Screen name="GetLabTestReport" component={GetLabTestReport} screenOptions={{headerShown:true}}/>
        <Stack.Screen name ="QuicProceduresAndSurgeries" component={proceduresAndSurgeries}/>
        <Stack.Screen name="StaffVisitBooking" component={StaffVisitBooking} screenOptions={{headerShown:true}}/>
        <Stack.Screen name ="feedBack" component={FeedBack}/>

        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
  