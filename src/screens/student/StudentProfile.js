import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const StudentProfile = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>StudentProfile screen</Text>
      <Button title="About Us " />
    </View>
  )
}

export default StudentProfile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})