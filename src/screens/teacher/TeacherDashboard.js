import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { SignOut } from '../../firebase/Authentivation'
import auth from '@react-native-firebase/auth'

const TeacherDashboard = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>TeacherDashboard screen</Text>
      <Button title="About Us " onPress={() => {
            auth().signOut(),
            console.log('Sign out')
            navigation.navigate('Login')
          }}
      />
    </View>
  )
}

export default TeacherDashboard;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})