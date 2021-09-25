import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import React from 'react'
import { Alert } from 'react-native'


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