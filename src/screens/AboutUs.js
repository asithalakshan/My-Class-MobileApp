import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  Image, 
  TextInput, 
  SafeAreaView, 
  ScrollView, 
  Alert
} 
from 'react-native'

import * as Const from '../../util/Contstants'
import ButtonLogin from '../components/ButtonMain'
import ButtonMain from '../components/ButtonMain'
import  FontAwesome5  from 'react-native-vector-icons/Ionicons'
import { SignIn, SignOut, GetUserType } from '../firebase/Authentication'
import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useDispatch } from 'react-redux'
import { signIn } from '../redux/actions/userAction'
import { useIsFocused } from '@react-navigation/native'



const Login = ({navigation}) => {

  const dispatch = useDispatch() 

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false) 
  const [responceId, setResponceId] = useState(false)
  const [userType, setUserType] = useState(false)  
  const isFocused = useIsFocused()

  useEffect(() => {
    setEmail('')
    setPassword('')
    setResponceId(false)
    setUserType('')
    setPassword(false)
    // dispatch(signIn(null))
  }, [isFocused])

  
  
  async function OnSignIn(e){

    let loginData = {email: email, password: password}
    
    const res = await SignIn(loginData)
    const type = await GetUserType(responceId)
      setUserType(type.data())

    setResponceId(res.user.uid)  
    
    if(responceId){
      dispatch(signIn(responceId))
      
      
      if(type.data().type == 'teacher'){
        navigation.navigate('TeacherBottomTab')
      }

      if(type.data().type == 'student'){
        navigation.navigate('StudentBottomTab')
      }
      
    }

  }

  return(

    <SafeAreaView style={styles.scrollview}>
      <ScrollView >
        <View style={styles.container}>

          <View style={{alignItems: 'center'}}>
            <Text style={styles.mainTitle}>My Class</Text>
            <Image style={styles.logo} source={require('../images/myclasslogo.png')}/>         
          </View>

          <View>
            <Text style={{textAlign: 'justify', fontSize: 15, lineHeight: 25}}>
            Due to the outbreak of the COVID-19 pandemic, many schools, colleges, and other educational institutions have embraced online education platforms. With e-learning web apps, you can provide an effective virtual learning experience to your learners.

            E-learning web apps improve students’ academic progress. It has surpassed the barriers of space and time and made the students, teachers, and parents stay connected from anywhere in and around the world.

            Online education has experienced an excellent transformation with the advent of e-learning web apps. Keep reading and by the end, you will understand the importance of e-learning web apps for your online classroom.  
            </Text>
          </View>

          <View style={[styles.row, {textAlign: 'center', paddingHorizontal: 80, paddingVertical: 50}]}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>Click Here to  </Text>
            <Text style={{color: Const.blueColor, fontSize: 20, textAlign: 'center'}} onPress={() => {navigation.navigate('Login'), console.log('Login')}}>Log In </Text>
          </View>

          
        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Const.lightBackgroundColor,
    marginHorizontal: 20,
  },
  scrollview: {
    backgroundColor: Const.lightBackgroundColor,
    flex: 1,
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
    width: 200, 
    height: 150, 
    marginVertical: 5,
    marginVertical: 20,
    
  },
  semiTitle: {
    fontSize: 30,
    color: Const.blackFontColor,
    fontWeight: '600',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Const.grayFontColor,
    marginBottom: 10,
    fontSize: 15,
    height: 50,
    color: Const.blackFontColor
  },
  icons: {
    flex: 3,
  },
  title: {
    color: Const.grayFontColor,
    fontSize: 20,
    fontWeight: 'bold',
  }
})