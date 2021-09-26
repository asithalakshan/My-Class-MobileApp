import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, ImageBackground, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GetUserData } from '../../../firebase/Teacher'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get("window");

const TeacherProfile = ({navigation}) => {

 
  // const userId = useSelector((state) => state.user.userId);
  const userId = 'a9igZ6qiFwgdAyAlUhkAwqXRFw63'
  console.log('iddddd' , userId)

  const [userData, setUserData] = useState('')

  useEffect(() => {
    GetUserData(userId).then((res) => {
      setUserData(res)   
      
    })
  }, [])

  console.log('userrr ' , userData)
  
  return(

    <View style={styles.container}>      
      <View style={[styles.mainCard]}>
        <Text style={styles.semiTitle}>Welcome {userData && userData.name.slice(0, userData.name.indexOf(" "))}</Text>
      </View>
        <SafeAreaView style={styles.scrollContainer}>
            <ScrollView>
                <View style={{marginHorizontal: 0}}>
                    <ImageBackground source={require('../../../images/profile1.jpg')} resizeMode='cover' style={styles.image}>
                        <View style={{flex: 1, justifyContent: 'flex-end',  }}>
                          <View style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 5,}}>
                            <Text style={styles.imageText}>{userData && userData.name}</Text>
                          </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.mainCard}>
                        <View>
                            {/* <Image style={{width: 150, height: 150, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                                source={require('../../images/profile1.jpg')}
                            /> */}
                           
                        </View>
                        <View style={styles.whitecard}>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="person-circle-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Name</Text>
                                    <Text style={styles.p}>{userData && userData.name}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="mail-open-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Address</Text>
                                    <Text style={styles.p}>{userData && userData.address }</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="school-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Qualifications</Text>
                                    <Text style={styles.p}>{userData && userData.qualifications}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="stats-chart-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Teaching Subject</Text>
                                    <Text style={styles.p}>{userData && userData.subject}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="reader-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>NIC Number</Text>
                                    <Text style={styles.p}>{userData && userData.nic}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons name="at-outline" size={40} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Email</Text>
                                    <Text style={styles.p}>{userData && userData.email}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    <Iconicons name="chevron-forward-circle-outline" size={30} color={Const.grayFontColor} style={styles.icons}/>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
    </View>
  )
} 

export default TeacherProfile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
    backgroundColor: Const.lightBackgroundColor,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    height: width,
    width: width,
    marginBottom: 20,
  },
  imageText: {
    color: Const.blackFontColor,
    fontSize: 30,
    fontWeight: 'bold',    
  },
  scrollContainer: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    paddingTop: 0,
    backgroundColor: Const.lightBackgroundColor,
  },
  mainCard: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#7F50F0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 2,
    backgroundColor: Const.whiteFontColor,
    borderRadius: 10,
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
  card: {
    backgroundColor: '#345',
  },
  p1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Const.grayFontColor,
    padding: 5,
  },
  p: {
    fontSize: 15,
    color: Const.grayFontColor,
    padding: 5,
  },
})