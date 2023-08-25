import 'react-native-reanimated'
import { View, Text } from 'react-native'
import React,{useEffect, } from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
import SplashScreen from 'react-native-splash-screen'
import FetchApi from './src/screens/FetchApi'
import Router from './src/navigation/Router'

const App = () => {

  useEffect(()=>{
SplashScreen.hide()
  })
  return (
   <Provider store={store}>
   <Router/>
   </Provider>
  )
}

export default App