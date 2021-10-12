import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import * as Const from '../../../../util/Contstants'
import Button from '../../../components/Button'
import * as TeacherFire from '../../../firebase/Teacher'
import { useIsFocused } from '@react-navigation/native'
import DatePicker from 'react-native-date-picker'

const AddClass = ({navigation}) => {
 

  const isFocused = useIsFocused()
  const [okPress, setOkPress] = useState(true)
  const [className, setClassName] = useState('')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [openT, setOpenT] = useState(false)

  useEffect(() => {
    setClassName('')
    setDate(new Date())
    setTime(new Date())
  }, [isFocused, okPress])

  function onConfirmDate (date) {
    setOpen(false)
    setDate(date)
    console.log(date)
  }

  function onConfirmTime (time) {
    setOpenT(false)
    setTime(time)
    console.log(time)
  }
  
  function addClass () {
    let classes = {
      name: className,
      datee: date,
      timee: time,
    }
    const responce = TeacherFire.AddClasses(classes)
    console.log('ad res' , responce)
    setOkPress(!okPress) 
    navigation.navigate('Schedule') 
  }

  return(

    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
          <Iconicons 
              name="arrow-back-outline" 
              size={40} 
              color={Const.blueColor} 
              style={[styles.icons, {
                  marginVertical: 10,
              }]}
              onPress={()=>{navigation.navigate('Schedulee')}}
              />
      </View>
      
      <Text style={styles.semiTitle}>Schedule a Class</Text>
      <ScrollView >
        <View >
          <View style={styles.row}>
            <Iconicons 
              name="person-circle-outline" 
              size={30} color={Const.grayFontColor} 
              style={styles.icons}
            />

            <View style={{flex: 21}}> 
              <Text style={styles.title}>Class</Text>
              <TextInput
                style={styles.input}
                placeholder='CLass title'
                onChangeText={text => setClassName(text)}
                defaultValue={className}
            />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="school-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}>               
              <Text style={styles.title}>Date</Text>
              <View style={styles.row}>
                <Text style={[styles.p, {flex: 4}]}>{date.getFullYear()}/{date.getMonth()}/{date.getDate()}</Text>
                <Button title="Date" styless={styles.buttonSchedule} onPress={() => setOpen(true)} />
              </View>
              <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                  onConfirmDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>          
          </View> 

          <View style={styles.row}>
            <View style={[styles.icons]}>
              <Iconicons name="school-outline" size={30} color={Const.grayFontColor} />
            </View>
            <View style={{flex: 21}}>               
              <Text style={styles.title}>Time</Text>
              <View style={styles.row}>
                <Text style={[styles.p, {flex: 4}]}>{time.getHours()}:{time.getMinutes()}</Text>
                <Button title="Time" styless={styles.buttonSchedule} onPress={() => setOpenT(true)} />
              </View>
              <DatePicker
                modal
                mode='time'
                open={openT}
                date={time}
                onConfirm={(time) => {
                  onConfirmTime(time)
                }}
                onCancel={() => {
                  setOpenT(false)
                }}
              />
            </View>          
          </View>
          <Button title="Schedule a Class"  onPress={() => addClass()}  styless={styles.button} />
        </View>
      </ScrollView>     
    </SafeAreaView>
  )
}

export default AddClass;


const styles = StyleSheet.create({ 

    container: {
      flex: 1,
      backgroundColor: Const.lightBackgroundColor,
      paddingHorizontal: 20,
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
    p: {
      fontSize: 20,
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
   buttonSchedule: {
    justifyContent: 'center',        
    backgroundColor: Const.greenColor,     
    height: 40,
    borderRadius: 10,
    width: 100   
 },
  
})