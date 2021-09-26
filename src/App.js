import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import RootStack from './navigators/RootStack';
import Login from './screens/Login';
import { Provider } from 'react-redux';
import store from './redux/store/store';


const App = () => {

  return(

    <Provider store={store}> 
      <RootStack/>
    </Provider>
    // <Text>yuyuy</Text>
    
  )
}

export default App;

  
