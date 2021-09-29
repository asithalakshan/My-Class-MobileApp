import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView, 
    ScrollView, 
    Image, 
    ImageBackground, 
    Dimensions,
    Modal,
    TextInput,
    Alert 
} from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GetStudentById, DeleteStudentById } from '../../../firebase/Teacher'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'

const { width, height } = Dimensions.get("window");

const ViewStudents = ({route, navigation}) => {

    const {studentData } = route.params;

    const [name, setName] = useState(studentData.name)
    const [school, setSchool] = useState(studentData.school)
    const [address, setAddress] = useState(studentData.address)
    const [isModalVisible, setModalVisible] = useState(false)   

    useEffect(() => {
        
    }, [])
    
    const onDelete = () => {
        
        
        Alert.alert(
            "Confirm Delete..!",
            "Do you want to Delete this student",
            [                      
                { text: "Yes", onPress: () => {
                    console.log("Yes Pressed"), 
                    DeleteStudentById(studentData.id), 
                    navigation.navigate('ViewStudents'
                )} },
                { text: "No", onPress: () => {
                    console.log("No Pressed"
                )} }
            ]
        );

       
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Iconicons 
                    name="arrow-back-outline" 
                    size={40} 
                    color={Const.blueColor} 
                    style={[styles.icons, {
                        marginVertical: 10,
                    }]}
                    onPress={()=>{navigation.navigate('ViewStudents')}}
                    />
            </View>
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
                    <View style={[styles.row, {flex: 1, justifyContent: 'space-between'}]}>
                        <Button 
                            title="Delete" 
                            onPress={() => onDelete()} 
                            styless={[styles.button, {backgroundColor: Const.redColor
                            }]}/>
                        <Button 
                            title="Update" 
                            onPress={() => setModalVisible(!isModalVisible)} 
                            styless={[styles.button, {backgroundColor: Const.greenColor
                            }]}/>
                    </View>
                </View>
                <Modal animationType="slide" 
                    transparent visible={isModalVisible} 
                    presentationStyle="overFullScreen" 
                    onDismiss={()=> {setModalVisible(!isModalVisible)}}>

                    <View style={styles.viewWrapper}>

                        <View style={[styles.modalView , {
                            transform: [{ translateX: -(width * 0.4) }, 
                                      { translateY: -(height * 0.2) }],}]}>

                          <View style={[styles.modalrow]}>                              
                             <Text style={[styles.mainTitle, 
                                {padding: 0, 
                                fontSize: 30
                              }]}>
                                   
                                  {'Upadte ' + studentData.name
                                  .slice(0, studentData.name.indexOf(" ")) + "'s Data"}                                

                            </Text>
                          </View> 
                          <TextInput
                            style={styles.input}
                            // placeholder={modalTitle}
                            // defaultValue={modalData}
                            // onChangeText={text => setFormValue(text)}
                            multiline={true}
                          />
                          <View style={[styles.modalrow, 
                              {paddingHorizontal: 32, 
                              paddingTop: 20}
                          ]}>                              
                              <View style={{
                                      flex: 1, 
                                      flexDirection: 'row', 
                                      justifyContent: 'space-between'
                                    }}>
                                  <Button 
                                    title="Close" 
                                    onPress={() => setModalVisible(!isModalVisible)} 
                                    styless={[styles.button, {backgroundColor: Const.redColor
                                  }]}/> 
                                  <Button 
                                    title="Update" 
                                    onPress={() => {
                                      setModalVisible(!isModalVisible),
                                      onUpdate(formValue)                                     
                                    }} 
                                    styless={[styles.button, {backgroundColor: Const.greenColor
                                    }]}/>                                        
                              </View>
                          </View>
                        </View>
                    </View>
                </Modal>
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
      height: 40,
      width: 100,
      borderRadius: 10,
      marginVertical: 20, 
      marginHorizontal: 20,   
   },
   modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    // height: 280,
    width: width * 0.8,
    backgroundColor: Const.modalBackgroundColor,
    borderRadius: 10,
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalrow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
//   button: {
//     padding: 5,
//     justifyContent: 'center',     
//     height: 40,
//     minWidth: 100,
//     borderRadius: 10,
//     marginVertical: 20, 
//   },
  input: {
    borderBottomColor: Const.grayFontColor,
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
  },  
})