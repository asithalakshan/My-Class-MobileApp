import React, { useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  ImageBackground, 
  Dimensions 
} from 'react-native'
import { SignOut } from '../../firebase/Authentication'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'
import { useIsFocused } from '@react-navigation/native'
import { GetClassList } from '../../../firebase/Teacher'
import moment from 'moment'

const { width } = Dimensions.get("window");

async function get_class_list () {
  
  let classes = []
 try {
    await GetClassList()
          .then((res) => {
            classes = res
            // console.log(res)      
          })
          return classes;

 } catch (err){
   console.log(err)
 }
 
}

const Schedule = ({navigation}) => {

  const isFocused = useIsFocused()
  const [classList, setClassList] = useState('')
  const today = new Date()
  
  useEffect(() => {    
    get_class_list().then((res) => {
      setClassList(res)
      console.log('sdsdsdsds' , res)
    })   
  }, [isFocused])

  return(

    <View style={styles.container}>
        <View style={[styles.mainCard], {flexDirection: 'row'}}>
          <Text style={styles.semiTitle}>Schedule </Text>          
          <View style={{alignContent: 'flex-end', flex: 1}}>
            <Button title="Schedule a Class"  onPress={() => {navigation.navigate('AddClass')}} styless={styles.button} />
          </View>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
          <View style={{marginHorizontal: 0}}>
                    <View style={styles.mainCard}>                        
                        <View style={styles.whitecard}>
                        
                        {Object.values(classList).map((row, i)=>(
                          <View style={styles.row} key={i}>
                                <View style={{flex: 3, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="person-circle-outline" 
                                      size={60} color={Const.grayFontColor} 
                                      style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 8, justifyContent: 'center'}}>
                                    <Text style={styles.p1}>{row?.data().name}</Text>
                                    <Text style={styles.p}>{moment(row.data().date.toDate()).format('MMMM Do YYYY')}</Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center'}}>
                                  <Text style={styles.p1}></Text>
                                  <Text style={styles.p}>{moment(row?.data().time.toDate()).format('LT')}</Text>
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

export default Schedule;


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