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

export async function GetStudentById  (id)  {
    
    let data = []
    try {
        return await firestore()
                .collection("student")
                    .doc(id)
                    .get()
                    .then((res) => {                            
                            data = res.data()
                            console.log("ustdents", data)
                            return data                       
                        })

        } catch (error) {
        console.log(error)
        }  
}

export async function DeleteStudentById  (id)  {
    
    let data = []
    try {
        return await firestore()
                .collection("student")
                    .doc(id)
                    .delete()
                    .then((res) => {                            
                            // data = res.data()
                            // console.log("ustdents", data)
                            return res                       
                        })

        } catch (error) {
        console.log(error)
        }  
}

export const AddClasses = (classes) => {
    firestore().collection("class")
        .doc()
        .set({
            name: classes.name,
            date: classes.datee,
            time: classes.timee, 
        })
        .then(function() {                    
            console.log("Class Aded");
            Alert.alert(
                "CLass Added",
                "Class added succuessfully",
                [                      
                    { text: "OK", onPress: () => {console.log("OK Pressed")}}
                ]
            );
            return true
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

export async function GetClassList  ()  {
    
    let data = []
    try {
        return await firestore()
                .collection("class")
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

export async function DeleteClass  (id)  {
    
    let data = []
    try {
        return await firestore()
                .collection("class")
                    .doc(id)
                    .delete()
                    .then((res) => {                            
                            // data = res.data()
                            // console.log("ustdents", data)
                            return res                       
                        })

        } catch (error) {
        console.log(error)
        }  
}

export const AddStudentStore = (student) => {  

        // function addUserTable (userId) {         
        // }
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
                    id: token.user.uid,
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
                    return true
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



export const DeleteStudent = (student) => {
    
    firestore().collection('student').where('email'== student.email )
        
}

export async function UpdateUserData  (data)  {
    
    console.log('propsss', data)
    // let data = []
    
    if(data.field == 'name'){
        try {
            await firestore().collection("teacher")
                        .doc(data.id)
                            .update("name", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }

    if(data.field == 'address'){
        try {
            await firestore().collection("teacher")
                        .doc(data.id)
                            .update("address", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }    

    if(data.field == 'qualifications'){
        try {
            await firestore().collection("teacher")
                        .doc(data.id)
                            .update("qualifications", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }

    if(data.field == 'subject'){
        try {
            await firestore().collection("teacher")
                        .doc(data.id)
                            .update("subject", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }
        console.log("usedatatatata", data)       
    
}


export async function UpdateStudentData  (data)  {
    
    console.log('propsss', data)
    // let data = []
    
    if(data.field == 'name'){
        try {
            await firestore().collection("student")
                        .doc(data.id)
                            .update("name", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }

    if(data.field == 'school'){
        try {
            await firestore().collection("student")
                        .doc(data.id)
                            .update("school", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }

    if(data.field == 'address'){
        try {
            await firestore().collection("student")
                        .doc(data.id)
                            .update("address", data.value)
                                .then((res) => {
                                    console.log(res)
                                })
                                .catch((err)=> {
                                    console.log(err)
                                })               
                           
                                                    
            } catch (error) {
            console.log(error)
            }
    }
        console.log("usedatatatata", data)       
    
}

