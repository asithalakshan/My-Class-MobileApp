import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'


export const SignIn = (loginData) => {

      return  auth() 
            .signInWithEmailAndPassword(loginData.email, loginData.password)
            .then((res) => {
                console.log('signed in!' ,res);
                return res                
            })
            .catch(error => {
                console.error(error.code);
                if (error.code === 'auth/wrong-password') {
                    Alert.alert(
                        "Invalid Password",
                        "Pleasse check Your password and tyr again.",
                        [                      
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert(
                        "Invalid Email",
                        "Pleasse check Your email and tyr again.",
                        [                      
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                }
            }) 
}


export const SignOut = ({navigation}) => {

    
}


