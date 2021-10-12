import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from '../../screens/teacher/schedule/Schedule';
import AddClass from '../../screens/teacher/schedule/AddCalss';

const StudentAdd = createNativeStackNavigator();

const ScheduleStack = () => {

    return (

        
            <StudentAdd.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <StudentAdd.Screen name='Schedulee' component={Schedule}/>
                <StudentAdd.Screen name='AddClass' component={AddClass}/>
            </StudentAdd.Navigator>
       
    )
}

export default ScheduleStack; 