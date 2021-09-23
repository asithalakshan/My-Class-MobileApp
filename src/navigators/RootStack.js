import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Root = createNativeStackNavigator();

const RootStack = () => {

    return (

        <NavigationContainer>
            <Root.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Root.Screen name='AuthStack' component={AuthStack}/>
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default RootStack; 

