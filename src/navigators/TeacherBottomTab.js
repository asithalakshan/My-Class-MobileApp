import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherProfile from '../screens/teacher/teacherProfile/TeacherProfile';
import ViewStudentAddStack from './teacherStacks/ViewStudentStack';
import ScheduleStack from './teacherStacks/ScheduleStack';
import { StyleSheet, View, Text } from 'react-native';
import  IonIcons  from 'react-native-vector-icons/Ionicons'
import * as Const from '../../util/Contstants'

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
      <Tab.Screen name="Schedule" component={ScheduleStack} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
                {focused ? 
                  <IonIcons name="calendar" size={30} style={[styles.tabIcon]} /> : 
                  <IonIcons name="calendar-outline" size={30} style={[styles.tabIcon]} />  
                }
                <Text style={styles.titleText}>Schedule</Text>
            </View>
          )
        }}
      />

      <Tab.Screen name="Students" component={ViewStudentAddStack} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
                {focused ? 
                  <IonIcons name="people" size={30} style={[styles.tabIcon]} /> : 
                  <IonIcons name="people-outline" size={30} style={[styles.tabIcon]} />  
                }
                <Text style={styles.titleText}>Students</Text>
            </View>
          )
        }}
      />

      <Tab.Screen name="Profilrs" component={TeacherProfile} 
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