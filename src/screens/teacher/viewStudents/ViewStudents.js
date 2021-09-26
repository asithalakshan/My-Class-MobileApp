import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ImageBackground, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GetStudentList } from '../../../firebase/Teacher'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'

async function get_student_list () {

  let students = []
 try {
    await GetStudentList()
          .then((res) => {
            students = res
            // console.log(res)      
          })
          return students;

 } catch (err){
   console.log(err)
 }
 
}

const { width } = Dimensions.get("window");

const ViewStudents = ({navigation}) => {

  const [studentList, setStudentList] = useState('')

  
  useEffect(() => {    
    get_student_list().then((res) => {
      setStudentList(res)
    })    
  }, [])

  console.log('sdddddssssdd',Object.values(studentList)) 

  return(

    <View style={styles.container}>
        <View style={[styles.mainCard], {flexDirection: 'row'}}>
          <Text style={styles.semiTitle}>Students </Text>          
          <View style={{alignContent: 'flex-end', flex: 1}}>
            <Button title="Add Student"  onPress={() => {navigation.navigate('AddStudent')}} styless={styles.button} />
          </View>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
          <View style={{marginHorizontal: 0}}>
                    <View style={styles.mainCard}>                        
                        <View style={styles.whitecard}>
                        
                        {Object.values(studentList).map((row, i)=>(
                          <View style={styles.row} key={i}>
                                <View style={{flex: 3, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="person-circle-outline" 
                                      size={60} color={Const.grayFontColor} 
                                      style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 9, justifyContent: 'center'}}>
                                    <Text style={styles.p1}>{row && row.data().name}</Text>
                                    <Text style={styles.p}>{row && row.data().school}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="chevron-forward-circle-outline" 
                                      size={30} color={Const.grayFontColor} 
                                      style={styles.icons}
                                      onPress={() => {navigation.navigate('StudentView', {studentData: row.data()})}}
                                  />
                                </View>
                              </View>
                        ))}
                        </View>
                    </View>
                </View>
              
          </ScrollView>
        </SafeAreaView>      
      
    </View>
  )
}

export default ViewStudents;


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
    // paddingHorizontal: 20,
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
    marginHorizontal: 20,
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
  button: {
    justifyContent: 'center',        
    backgroundColor: Const.blueColor,     
    height: 50,
    borderRadius: 10,
    marginVertical: 20, 
    marginHorizontal: 20,
 },
})