import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, Modal, SafeAreaView, ScrollView, TouchableOpacity, Button} from 'react-native'
import Clock from './Clock'
import moment from 'moment'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import * as Const from '../../util/Contstants'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation(); 
    
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [today, setToday] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        var today = new Date()

        if(min <=9 ){
            min = '0'+min
        }
        setCurrentTime(
            // date + '/' + month + '/' + year 
            // + ' ' + 
            hours + ':' + min 
            // + ':' + sec
        );
        setCurrentDate(
            date + '/' + month + '/' + year
        )
        setToday(moment(today).format('MMMM Do YYYY'))
    }, []);

    const signOut = () => {
        auth().signOut()
            navigation.navigate('Login')
            // )
    }
    return (
        <View style={[styless.row , { paddingHorizontal: 0, backgroundColor: Const.whiteFontColor}]}> 
            <View style={[styless.row, {flex: 2}]}>
                <View >
                    <Text style={styless.dateTime}>
                        {today}
                    </Text>
                    <View style={[styless.time, {marginHorizontal: 15}]}>
                    <Clock/>
                    </View>
                </View> 
            </View>
            <View style={[styless.row, {flex: 1, marginTop: 5}]}>
                <TouchableOpacity style={[styless.row, {justifyContent: 'center', }]} onPress={() => {signOut()}}> 
                    <Ionicons name="log-out-outline" size={30} color={Const.blueColor}/>
                    <Text style={{fontSize: 18, paddingVertical: 3, paddingHorizontal: 5, color: Const.blueColor}}>Log Out</Text>
                </TouchableOpacity>   
                {/* <Button title={'Login'} onPress={console.log('erererer')}/> */}
            </View>           
        </View>            
    )
}

export default Header

const styless = StyleSheet.create({

    dateTime: {
        margin: 0,
        marginHorizontal: 21,
        fontSize: 14,
        color: Const.blueColor,
    },
    time: {
        fontSize: 23,
        marginHorizontal: 21,
        color: Const.blueColor,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 4,
        // backgroundColor: 'gray',
    },
    notiIcon: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginLeft: "auto",
        marginRight: 25,
        alignContent: 'center',
        alignItems: 'center',
    }

})