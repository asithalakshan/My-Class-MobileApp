import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const StudentDashboard = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>StudentDashboard screen</Text>
      <Button title="About Us " onPress={() => {navigation.navigate('Login')}}/>
    </View>
  )
}

export default StudentDashboard;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})