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

          <Text style={styles.semiTitle}>Login</Text>

          <View style={styles.row}>
            <FontAwesome5 name="at-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder='Enter Your Email'
                onChangeText={text => setEmail(text)}
                // defaultValue={email}
            />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <FontAwesome5 name="lock-closed-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}> 
              <Text style={styles.title}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={!showPassword}
                onChangeText={text => setPassword(text)}
                // defaultValue={password}
            />
            </View>
            <View style={[styles.icons, {justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: 10, marginBottom: 10, borderBottomColor: Const.grayFontColor, borderBottomWidth: 1,}]}>
              {/* <FontAwesome5 name="eye" size={30} color={Const.grayFontColor} onPress={} /> */}
              {showPassword ?  
                <FontAwesome5  name='eye-outline' size={30} color={Const.grayFontColor} onPress={() => setShowPassword((showPassword) => !showPassword)}/> :
                <FontAwesome5  name='eye-off-outline' size={30} color={Const.grayFontColor} onPress={() => setShowPassword((showPassword) => !showPassword)}/>  
              }  
            </View>
          </View>

          <ButtonLogin title="Sign In"  onPress={OnSignIn}/>
          
          <View style={[styles.row, {marginHorizontal: 55, }]}>
            <Text style={{fontSize: 15,}}>Goto </Text>
            <Text style={{color: Const.blueColor, fontSize: 15,}} onPress={() => {navigation.navigate('AboutUs'), console.log('About us press')}}>about us </Text>
            <Text style={{fontSize: 15,}}>page to look more...!</Text>
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