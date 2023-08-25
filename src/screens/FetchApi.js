import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/action/fetchApiAction'
import * as Fonts from '../theme/font' 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FetchApi = () => {
  console.log("fetch screen")
const Dispatch=useDispatch()
const ApiData= useSelector((state)=>state?.FetchApi?.data)

  useEffect(()=>{
Dispatch(fetchData())
  },[])

console.log("api data from redux store ====>",ApiData)


const renderItem=(item)=>{
  console.log("item ------>", item)
  return(
    <View style={styles.DataListView}>
      <Text style={styles.dataTxtStyle}>{item?.item?.API}</Text>
      <Text style={styles.dataTxtStyle}>{item?.item?.Auth}</Text>
      <Text style={styles.dataTxtStyle}>{item?.item?.Description}</Text>
    </View>
  )
}
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
<View style={styles.Main}>
      <Text>FetchApi</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={ApiData}
      renderItem={renderItem}
      />
    </View>
    </SafeAreaView>
    
  )
}

export default FetchApi;

const styles = StyleSheet.create({
  Main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  DataListView:{
    width:"95%",
    borderColor:'black',
    alignItems:'center',
    alignSelf:'center',
    padding:windowWidth*0.01,
    borderRadius:windowWidth*0.03,
    borderWidth:windowWidth*0.001,
    marginVertical:windowHeight*0.01
  },
  dataTxtStyle:{
   fontSize:windowWidth*0.04,
   //fontFamily:'Poppins-Bold.ttf',
   fontFamily:Fonts.Medium
  }
  
})