import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, ImageBackground, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GetStudentList } from '../../../firebase/Teacher'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'

const ViewStudents = ({route, navigation}) => {

    const {studentData } = route.params;

    return (
        <SafeAreaView style={styles.container}>
      
            <Text style={styles.semiTitle}>Student Profile</Text>
            <ScrollView >
                <View >
                <View style={styles.row}>
                    <Iconicons name="person-circle-outline" size={50} color={Const.grayFontColor} style={styles.icons}/>
                    <View style={{flex: 8}}> 
                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.p}>{studentData && studentData.name}</Text>                     
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.icons]}>
                        <Iconicons name="school-outline" size={50} color={Const.grayFontColor} />
                    </View>
                    <View style={{flex: 8}}> 
                        <Text style={styles.title}>School</Text>
                        <Text style={styles.p}>{studentData && studentData.school}</Text>                    
                    </View>            
                </View>

                <View style={styles.row}>
                    <View style={[styles.icons]}>
                        <Iconicons name="mail-open-outline" size={50} color={Const.grayFontColor} />
                    </View>
                    <View style={{flex: 8}}> 
                        <Text style={styles.title}>Address</Text>
                        <Text style={styles.p}>{studentData && studentData.address}</Text> 
                    </View>            
                </View>

                <View style={styles.row}>
                    <View style={[styles.icons]}>
                        <Iconicons name="at-outline" size={50} color={Const.grayFontColor} />
                    </View>
                    <View style={{flex: 8}}> 
                        <Text style={styles.title}>Email</Text>
                        <Text style={styles.p}>{studentData && studentData.email}</Text>                     
                    </View>            
                </View>

                <View style={styles.row}>
                    <View style={[styles.icons]}>
                    <Iconicons name="document-text-outline" size={50} color={Const.grayFontColor} />
                    </View>
                    <View style={{flex: 8}}> 
                        <Text style={styles.title}>NIC Number</Text>
                        <Text style={styles.p}>{studentData && studentData.nic}</Text> 
                    </View>            
                </View> 
                {/* <Button title="Add Student"  onPress={addStudent} styless={styles.button} /> */}
                </View>
            </ScrollView>     
        </SafeAreaView>
    )
}

export default ViewStudents;


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
      flex: 2,
    },
    title: {
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