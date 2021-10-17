import React, { useEffect, useState } from 'react'
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
import * as Const from '../../../../util/Contstants'
import  Iconicons  from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'
import { useIsFocused } from '@react-navigation/native'
import { GetClassList, DeleteClass } from '../../../firebase/Teacher'
import Header from '../../../components/Header'
import moment from 'moment'
import DatePicker from 'react-native-date-picker'

const { width, height } = Dimensions.get("window");

async function get_class_list () {
  
  let classes = []
 try {
    await GetClassList()
          .then((res) => {
            classes = res
            // console.log(res)      
          })
          return classes;

 } catch (err){
   console.log(err)
 }
 
}

const Schedule = ({navigation}) => {

  const isFocused = useIsFocused()
  const [classList, setClassList] = useState('')
  const today = new Date()
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalData, setModalData] = useState('')
  const [modalType, setModalType] = useState('')
  const [formValue, setFormValue] = useState(null)
  
  useEffect(() => {    
    get_class_list().then((res) => {
      setClassList(res)
    })   
  }, [isFocused])

  return(

    <View style={styles.container}>
        <Header/>
        <View style={[styles.mainCard], {flexDirection: 'row'}}>
          <Text style={styles.semiTitle}>Schedule </Text>          
          <View style={{alignContent: 'flex-end', flex: 1}}>
            <Button title="Schedule a Class"  onPress={() => {navigation.navigate('AddClass')}} styless={styles.button} />
          </View>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
          <View style={{marginHorizontal: 0}}>
                    <View style={styles.mainCard}>                        
                    <View style={styles.whitecard}>
                        <Text style={styles.mainTitle}>Upcoming Classes</Text>
                        {Object.values(classList).map((row, i)=>(
                          <View key={i}>
                            {moment(row.data().date.toDate()).format() >= moment(today).format() ? 
                            <View style={styles.row}>
                              <View style={{flex: 3, justifyContent: 'center'}}>
                                <Iconicons 
                                    name="person-circle-outline" 
                                    size={60} color={Const.grayFontColor} 
                                    style={styles.icons}
                                />
                              </View>
                              <View style={{flex: 8, justifyContent: 'center'}}>
                                  <Text style={styles.p1}>{row?.data().name}</Text>
                                  <Text style={styles.p}>{moment(row.data().date.toDate()).format('MMMM Do YYYY')}</Text>
                              </View>                                
                              <View style={{flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <View >
                                  {/* <Iconicons 
                                      name="create-outline" 
                                      size={30} 
                                      color={Const.grayFontColor} 
                                      onPress={() => {
                                        setModalVisible(!isModalVisible), 
                                        setModalData(row?.data())}}
                                    /> */}
                                </View>
                                <Text style={styles.p}>{moment(row?.data().time.toDate()).format('LT')}</Text>
                              </View>
                            </View>
                            : null}                            
                          </View>                            
                        ))}
                        </View>
                        <View style={styles.whitecard}>
                        <Text style={styles.mainTitle}>Past Classes</Text>
                        {Object.values(classList).map((row, i)=>(
                          <View key={i}>
                            {moment(row.data().date.toDate()).format() < moment(today).format() ? 
                            <View style={styles.row}>
                              <View style={{flex: 3, justifyContent: 'center'}}>
                                <Iconicons 
                                    name="person-circle-outline" 
                                    size={60} color={Const.grayFontColor} 
                                    style={styles.icons}
                                />
                              </View>
                              <View style={{flex: 8, justifyContent: 'center'}}>
                                  <Text style={styles.p1}>{row?.data().name}</Text>
                                  <Text style={styles.p}>{moment(row.data().date.toDate()).format('MMMM Do YYYY')}</Text>
                              </View>                                
                              <View style={{flex: 3, justifyContent: 'center'}}>
                                <Text style={styles.p1}></Text>
                                <Text style={styles.p}>{moment(row?.data().time.toDate()).format('LT')}</Text>
                              </View>
                            </View>
                            : null}                            
                          </View>                            
                        ))}
                        </View>
                    </View>
                </View>
                {/* <Modal animationType="slide" 
                    transparent visible={isModalVisible} 
                    presentationStyle="overFullScreen" 
                    onDismiss={()=> {setModalVisible(!isModalVisible)}}>

                    <View style={styles.viewWrapper}>

                        <View style={[styles.modalView , {
                            transform: [{ translateX: -(width * 0.4) }, 
                                      { translateY: -(height * 0.2) }],}]}>

                          <View style={[styles.modalrow, {alignItems: 'center'}]}> 
                            <Iconicons 
                              name="trash-outline" 
                              size={30}
                              style={[styles.icons, {paddingRight: 100}]}
                            />                             
                             <Text style={[styles.mainTitle, 
                                {padding: 0, 
                                fontSize: 30
                              }]}>
                                  Edit Class
                                </Text>
                          </View> 
                          <TextInput
                            style={styles.input}
                            placeholder="Class"
                            defaultValue={modalData?.name}
                            onChangeText={text => setFormValue(text)}
                            multiline={true}
                          />
                          <View style={[styles.modalrow, 
                              {paddingHorizontal: 32, 
                              paddingTop: 20}
                          ]}>                              
                              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                  <Button 
                                    title="Close" 
                                    onPress={() => setModalVisible(!isModalVisible)} 
                                    styless={[styles.buttonModal, {backgroundColor: Const.redColor
                                  }]}/> 
                                  <Button 
                                    title="Update" 
                                    onPress={() => {
                                      setModalVisible(!isModalVisible)                                    
                                    }} 
                                    styless={[styles.buttonModal, {backgroundColor: Const.greenColor
                                    }]}/>                                        
                              </View>
                          </View>
                        </View>
                    </View>
                </Modal> */}
          </ScrollView>
        </SafeAreaView>      
      
    </View>
  )
}

export default Schedule;


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
    // paddingHorizontal: 20,
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
  mainTitle: {
    alignItems: 'center',
    color: Const.blueColor,
    fontSize: 25,
    padding: 10,
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
    marginHorizontal: 20,
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
  button: {
    justifyContent: 'center',        
    backgroundColor: Const.blueColor,     
    height: 50,
    borderRadius: 10,
    marginVertical: 20, 
    marginHorizontal: 20,
  },
  whitecard: {
    backgroundColor: Const.backgroungLightColour,
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  buttonModal: {
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
  },
  modalrow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
})