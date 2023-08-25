import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'

const  HomeScreen=()=> {
  console.log("Home screen ")
  return (
    <View style={styles.Main}>
      <Text>HomeScreen</Text>
    </View>
  )
}
export default HomeScreen;

const styles= StyleSheet.create({
  Main:{
    flex:1,
    alignItems:'center', justifyContent:'center'
  }
})