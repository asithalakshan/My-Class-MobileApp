import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewStudents from '../../screens/teacher/viewStudents/ViewStudents';
import AddStudent from '../../screens/teacher/viewStudents/AddStudent';

const StudentAdd = createNativeStackNavigator();

const ViewStudentAddStack = () => {

    return (

        
            <StudentAdd.Navigator 
                screenOptions={{
                    // headerShown: false
                }}>
                <StudentAdd.Screen name='ViewStudents' component={ViewStudents}/>
                <StudentAdd.Screen name='AddStudent' component={AddStudent}/>
            </StudentAdd.Navigator>
       
    )
}

export default ViewStudentAddStack; 