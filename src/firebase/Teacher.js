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
    
}

export async function GetStudentList  ()  {
    
    let data = []
    try {
        return await firestore()
                .collection("student")
                    .get()
                    .then((res) => {                            
                            data = res.docs
                            // console.log("ustdents", data)
                            return data                       
                        })
                       
                        
                                                
        } catch (error) {
        console.log(error)
        }
          
        
    
}




export const AddStudentStore = (student) => {  

        function addUserTable (userId) {
            
        }
    
        auth()
        .createUserWithEmailAndPassword(student.email, student.nic)
        .then(token => {
            firestore().collection("user")
                .doc(token.user.uid)
                .set({
                    email: student.email,                    
                    type: student.type,
                })
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
                            { text: "OK", onPress: () => {console.log("OK Pressed")}}
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