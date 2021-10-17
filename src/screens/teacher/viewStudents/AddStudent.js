import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import * as Const from '../../../../util/Contstants'
import Button from '../../../components/Button'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { firebase } from '@react-native-firebase/firestore'
import * as TeacherFire from '../../../firebase/Teacher'
import { useIsFocused } from '@react-navigation/native'
import Header from '../../../components/Header'


const AddStudent = ({navigation}) => {

  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [nic, setNic] = useState('')
  const [type, setType] = useState('student')

  const isFocused = useIsFocused()
  const [okPress, setOkPress] = useState(true)

  useEffect(() => {

  }, [isFocused, okPress])

  

  function addStudent () {
    let student = {
      name: name,
      school: school,
      address: address,
      email: email,
      nic: nic,
      type: type,
    }
    // console.log(student)
    const responce = TeacherFire.AddStudentStore(student)
    
    // navigation.navigate('ViewStudents')
    setOkPress(!okPress)
    if(responce) {
      
      
    }
    // TeacherFire.AddStudentAuth(student)
    
  }

  return(

    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={[styles.row, {paddingHorizontal: 20, marginVertical: 0}]}>
          <Iconicons 
              name="arrow-back-outline" 
              size={40} 
              color={Const.blueColor} 
              style={[styles.icons, {
                  marginVertical: 10,
              }]}
              onPress={()=>{navigation.navigate('ViewStudents')}}
              />
      </View>
      
      <Text style={[styles.semiTitle, {paddingHorizontal: 20,  marginVertical: 0}]}>Add Student</Text>
      <ScrollView >
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.row}>
            <Iconicons 
              name="person-circle-outline" 
              size={30} color={Const.grayFontColor} 
              style={styles.icons}
            />
            <View style={{flex: 21}}> 
              <Text style={styles.title}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder='Student Name'
                onChangeText={text => setName(text)}
                defaultValue={name}
            />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="school-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>School</Text>
              <TextInput
                style={styles.input}
                placeholder='Student School'
                onChangeText={text => setSchool(text)}
                defaultValue={school}
            />
            </View>            
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="mail-open-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder='Student Address'
                // secureTextEntry={!showPassword}
                onChangeText={text => setAddress(text)}
                defaultValue={address}
            />
            </View>            
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="at-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder='Student Email'
                // secureTextEntry={!showPassword}
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            </View>            
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="document-text-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>NIC Number</Text>
              <TextInput
                style={styles.input}
                placeholder='Student NIC Number'
                // secureTextEntry={!showPassword}
                onChangeText={text => setNic(text)}
                defaultValue={nic}
            />
            </View>            
          </View> 
          <Button title="Add Student"  onPress={addStudent} styless={styles.button} />
        </View>
      </ScrollView>     
    </SafeAreaView>
  )
}

export default AddStudent;


const styles = StyleSheet.create({ 

    container: {
      flex: 1,
      backgroundColor: Const.lightBackgroundColor,
      // paddingHorizontal: 20,
      paddingBottom: 120,
    },
    mainCard: {
      marginHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    mainTitle: {
      alignItems: 'center',
      color: Const.blueColor,
      fontSize: 25,
      padding: 20,
      fontWeight: '600'
    },
    logo: {
      width: 300, 
      height: 150, 
      marginVertical: 5,
      marginTop: 20,
      
    },
    semiTitle: {
      fontSize: 30,
      color: Const.blackFontColor,
      fontWeight: '600',
      marginVertical: 20,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: Const.grayFontColor,
      marginBottom: 10,
      fontSize: 15,
      height: 50,
      fontWeight: '300',
      color: '#000',
    },
    icons: {
      flex: 3,
    },
    title: {
      color: Const.grayFontColor,
      fontSize: 20,
      fontWeight: 'bold',
    },
    button: {
      justifyContent: 'center',        
      backgroundColor: Const.blueColor,     
      height: 50,
      borderRadius: 10,
      marginVertical: 20, 
      marginHorizontal: 20,   
   },
  
})