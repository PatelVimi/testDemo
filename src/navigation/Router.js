import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FetchApi from '../screens/FetchApi';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
 

const  MyDrawer=()=> {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Fetch APi" component={FetchApi} />
      </Drawer.Navigator>
    );
  }

const BottomTabs=()=> {
    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
      }}>
        
        <Tab.Screen name="Home" component={HomeScreen} 
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          />
          <Tab.Screen name="fetchapi" component={FetchApi} 
        options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
          />
      </Tab.Navigator>
    );
  } 

const Router=()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Api" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router;