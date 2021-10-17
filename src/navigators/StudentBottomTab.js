import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import  IonIcons  from 'react-native-vector-icons/Ionicons'
import * as Const from '../../util/Contstants'
import StudentDashboard from '../screens/student/dashboard/StudentDashboard';
import StudentProfile from '../screens/student/studentProfile/StudentProfile';

const Tab = createBottomTabNavigator();

const TeacherBottomTab = () => {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFF',
          height: 90,
          borderRadius: 15,
          ...styles.shadow,
        },
        headerShown: false,
      }}
    >
            
      <Tab.Screen name="StudentDashboard" component={StudentDashboard} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
                {focused ? 
                  <IonIcons name="home" size={30} style={[styles.tabIcon]} /> : 
                  <IonIcons name="home-outline" size={30} style={[styles.tabIcon]} />  
                }
                <Text style={styles.titleText}>Home</Text>
            </View>
          )
        }}
      /> 

      <Tab.Screen name="StudentProfile" component={StudentProfile}  
        options={{
          tabBarIcon: ({focused}) => (
            <View>
                {focused ? 
                  <IonIcons name="person" size={30} style={[styles.tabIcon]} /> : 
                  <IonIcons name="person-outline" size={30} style={[styles.tabIcon]} />  
                }
                <Text style={styles.titleText}>Profile</Text>
            </View>
          )
        }}
      />
      
    </Tab.Navigator>

  );
}

export default TeacherBottomTab; 

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F50F0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,    
  },
  tabIcon: { 
    paddingHorizontal: 3, 
    color: Const.blueColor,
  },
  titleText: {
    color: Const.blueColor,
  }  
})