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
  TextInput 
} from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GetUserData, UpdateUserData } from '../../../firebase/Teacher'
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'
import { useIsFocused } from '@react-navigation/native'
import Header from '../../../components/Header'

const { width, height } = Dimensions.get("window");

const TeacherProfile = ({navigation}) => {

 
  const userId = useSelector((state) => state.user.userId);
  

  const [userData, setUserData] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalData, setModalData] = useState('')
  const [modalType, setModalType] = useState('')
  const [formValue, setFormValue] = useState(null)
  const isFocused = useIsFocused()

  useEffect(() => {
    GetUserData(userId).then((res) => {
      setUserData(res)   
      setFormValue(null)
    })
  }, [isFocused])

  const onUpdate = (value) => {
    let data = {
      id: userId,
      field: modalType,
      value: value,
    }
    UpdateUserData(data).then(() => {
      GetUserData(userId).then((res) => {
        setUserData(res), 
        setFormValue(null)  
        
    })
     
    })
  }
  
  return(

    <View style={styles.container}>  
      <Header/>    
      <View style={[styles.mainCard]}>
        <Text 
          style={styles.semiTitle}
        >Welcome {''}  
          {userData && userData.name
            .slice(0, userData.name.indexOf(" "))}
        </Text>
      </View>
        <SafeAreaView style={styles.scrollContainer}>
            <ScrollView>
                <View style={{marginHorizontal: 0}}>
                    <ImageBackground 
                      source={require('../../../images/profile1.jpg')} 
                      resizeMode='cover' 
                      style={styles.image}
                    >
                        <View style={{flex: 1, justifyContent: 'flex-end',  }}>
                          <View 
                            style={{
                              paddingHorizontal: 20, 
                              paddingVertical: 10, 
                              backgroundColor: 'rgba(255, 255, 255, 0.6)',
                              borderRadius: 5,
                          }}>
                            <Text style={styles.imageText}>{userData && userData.name}</Text>
                          </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.mainCard}>
                        <View>
                            {/* <Image style={{width: 150, height: 150, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                                source={require('../../images/profile1.jpg')}
                            /> */}
                           
                        </View>
                        <View style={styles.whitecard}>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="person-circle-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Name</Text>
                                    <Text style={styles.p}>{userData && userData.name}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="create-outline" 
                                      size={30} 
                                      color={Const.grayFontColor} 
                                      style={styles.icons}
                                      onPress={() => {
                                        setModalVisible(!isModalVisible), 
                                        setModalTitle('Name'), 
                                        setModalData(userData.name)
                                        setModalType('name')
                                    }}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="mail-open-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Address</Text>
                                    <Text style={styles.p}>{userData && userData.address }</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="create-outline" 
                                      size={30} 
                                      color={Const.grayFontColor} 
                                      style={styles.icons}
                                      onPress={() => {
                                        setModalVisible(!isModalVisible), 
                                        setModalTitle('Address'), 
                                        setModalData(userData.address)
                                        setModalType('address')
                                    }}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="school-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Qualifications</Text>
                                    <Text style={styles.p}>{userData && userData.qualifications}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="create-outline" 
                                      size={30} 
                                      color={Const.grayFontColor} 
                                      style={styles.icons}
                                      onPress={() => {
                                        setModalVisible(!isModalVisible), 
                                        setModalTitle('Qualifications'), 
                                        setModalData(userData.qualifications)
                                        setModalType('qualifications')
                                    }}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="stats-chart-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Teaching Subject</Text>
                                    <Text style={styles.p}>{userData && userData.subject}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                  <Iconicons 
                                      name="create-outline" 
                                      size={30} 
                                      color={Const.grayFontColor} 
                                      style={styles.icons}
                                      onPress={() => {
                                        setModalVisible(!isModalVisible), 
                                        setModalTitle('Teaching Subject'), 
                                        setModalData(userData.subject)
                                        setModalType('subject')
                                    }}/>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="at-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>Email</Text>
                                    <Text style={styles.p}>{userData && userData.email}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex: 2}}>
                                  <Iconicons 
                                    name="reader-outline" 
                                    size={40} 
                                    color={Const.grayFontColor} 
                                    style={styles.icons}
                                  />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.p1}>NIC Number</Text>
                                    <Text style={styles.p}>{userData && userData.nic}</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center'}}>
                                    
                                </View>
                            </View>
                            
                            
                        </View>
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
                                  {modalTitle}
                                </Text>
                          </View> 
                          <TextInput
                            style={styles.input}
                            placeholder={modalTitle}
                            defaultValue={modalData}
                            onChangeText={text => setFormValue(text)}
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
    </View>
  )
} 

export default TeacherProfile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
    backgroundColor: Const.lightBackgroundColor,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    height: width,
    width: width,
    marginBottom: 20,
  },
  imageText: {
    color: Const.blackFontColor,
    fontSize: 30,
    fontWeight: 'bold',    
  },
  scrollContainer: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    paddingTop: 0,
    backgroundColor: Const.lightBackgroundColor,
  },
  mainCard: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#7F50F0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 2,
    backgroundColor: Const.whiteFontColor,
    borderRadius: 10,
  },
  modalrow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#345',
  },
  p1: {
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
  button: {
    padding: 5,
    justifyContent: 'center',     
    height: 40,
    minWidth: 100,
    borderRadius: 10,
    marginVertical: 20, 
  },
  input: {
    borderBottomColor: Const.grayFontColor,
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    color: Const.blackFontColor;
  },
})