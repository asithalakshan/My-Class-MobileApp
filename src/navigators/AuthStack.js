import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import AboutUs from  '../screens/AboutUs';
import StudentDrawer from './StudentDrawer';
import TeacherBottomTab from './TeacherBottomTab';


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
                <Auth.Screen name='StudentDrawer' component={StudentDrawer}/>
                <Auth.Screen name='TeacherBottomTab' component={TeacherBottomTab}/>

            </Auth.Navigator>
       
    )
}

export default AuthStack; 