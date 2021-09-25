import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const ViewStudents = ({navigation}) => {

  return(

    <View style={styles.container}>
      <Text>ViewStudents screen</Text>
      <Button title="Add Student" onPress={() => {navigation.navigate('AddStudent')}}/>
    </View>
  )
}

export default ViewStudents;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})