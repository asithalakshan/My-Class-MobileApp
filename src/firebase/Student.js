import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-native'

export async function GetUserData  (userId)  {
    
    let data = []
    try {
        await firestore()
                .collection("student")
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

export async function UpdateUserData  (data)  {
    
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