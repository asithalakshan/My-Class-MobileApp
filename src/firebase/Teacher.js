import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-native'

export async function GetUserData  (userId)  {
    
    let data = []
    try {
        await firestore()
                .collection("teacher")
                    .doc(userId)
                        .get()
                        .then((res) => {
                            
                            data = res.data()
                            
                        })
                        return data
                        
        } catch (error) {
        console.log(error)
        }
        console.log("usedatatatata", data)
    // firestore()
    //     .collection("teacher")
    //         .doc(userId)
    //             .get()
    //                 .then((res) => {
    //                     console.log("usedatatatata", res.data())
                        
    //                 })
    //                 .catch((err) => {
    //                     console.log(err)
    //                 })
    
    
}


export const AddStudentStore = (student) => {    
    
        auth()
        .createUserWithEmailAndPassword(student.email, student.nic)
        .then(token => {
            firestore().collection("student")
                .doc(token.user.uid)
                .set({
                    name: student.name,
                    school: student.school,
                    address: student.address,
                    email: student.email,
                    nic: student.nic,
                    type: student.type,
                })
                .then(function() {
                    console.log("User Aded");
                    Alert.alert(
                        "Student Added",
                        "Student added succuessfully",
                        [                      
                            { text: "OK", onPress: () => {console.log("OK Pressed"), window.location.reload()}}
                        ]
                    );
                    
                })
                .catch((err) => {
                    console.log(err)
                    return err
                })
        })
        .catch((err) => {
                    console.log(err)
                    return err
                })
}


export const AddStudentAuth = (student) => {
    auth()
        .createUserWithEmailAndPassword(student.email, student.nic)
        
}