import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import ServicesScreen from "../screens/servicesScreen";
import LabSampleCollection from "../screens/labSampleCollection"
import RMOvsit from "../screens/rmoVsit"
import StaffVisitBooking from "../screens/staffVisitBooking"
import DoctorAppointment from "../screens/doctorAppoitment";
import FeedBack from "../screens/feedBack/feedBack";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="servicesScreen" component={ServicesScreen} screenOptions={{headerShown:true}}/>
        <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} screenOptions={{headerShown:true}}/>
        <Stack.Screen name ="feedBack" component={FeedBack}/>
        {/* <Stack.Screen name="RMOvsit" component={RMOvsit} screenOptions={{headerShown:true}} /> */}
        {/* <Stack.Screen name="StaffVisitBooking" component={StaffVisitBooking} screenOptions={{headerShown:true}}/> */}
        <Stack.Screen name="LabSampleCollection" component={LabSampleCollection} screenOptions={{headerShown:true}}/>


        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
  