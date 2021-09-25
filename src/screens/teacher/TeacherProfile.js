import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const TeacherProfile = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>TeacherProfile screen</Text>
      <Button title="About Us " onPress={() => {navigation.navigate('AboutUs')}}/>
    </View>
  )
}

export default TeacherProfile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})