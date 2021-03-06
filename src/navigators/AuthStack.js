import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import AboutUs from  '../screens/AboutUs';
import StudentBottomTab from './StudentBottomTab';
import TeacherBottomTab from './TeacherBottomTab';
import Header from '../components/Header';


const Auth = createNativeStackNavigator();

const AuthStack = () => {

    return (

        
            <Auth.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Auth.Screen name='Login' component={Login}/>
                <Auth.Screen name='AboutUs' component={AboutUs}/>
                <Auth.Screen name='StudentBottomTab' component={StudentBottomTab}/>
                <Auth.Screen name='TeacherBottomTab' component={TeacherBottomTab}/>
                {/* <Auth.Screen name='Header' component={Header}/> */}

            </Auth.Navigator>
       
    )
}

export default AuthStack; 