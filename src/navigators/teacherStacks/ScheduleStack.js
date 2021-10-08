import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from '../../screens/teacher/schedule/Schedule';

const StudentAdd = createNativeStackNavigator();

const ScheduleStack = () => {

    return (

        
            <StudentAdd.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <StudentAdd.Screen name='ViewStudents' component={Schedule}/>
            </StudentAdd.Navigator>
       
    )
}

export default ScheduleStack; 