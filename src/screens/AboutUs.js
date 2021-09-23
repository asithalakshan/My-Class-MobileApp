import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const AboutUs = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>About Us screen</Text>
      <Button title={'Login'} onPress={() => {navigation.navigate('Login')}}/>
    </View>
  )
}

export default AboutUs;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})