import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from "react-bootstrap";
import face from './../assets/img/faces/face-0.jpg';

import Home from '../screens/Home';
import About from '../screens/About';
import Carpool from '../screens/Carpool';
import Charging from '../screens/Charging';
import Map from '../screens/Map';
import Settings from '../screens/Settings';
import MyAccount from '../screens/MyAccount';



const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) =>(
  
  <HomeStack.Navigator>
  <HomeStack.Screen 
    name ="Home" 
    component={Home}
    options={{
      title:"Home",
      headerLeft:() => (
        <Icon.Button name='menu' size={25}
        backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
        </Icon.Button>
      )
    }}
    />
  </HomeStack.Navigator>
  );

const AboutStack = createStackNavigator();
const AboutStackScreen = ({navigation}) =>(
  <AboutStack.Navigator>
  <AboutStack.Screen name ="menu" component={About}
  options={{
    title:"About",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }}
   />
  </AboutStack.Navigator>
  );

const CarpoolStack = createStackNavigator();
const CarpoolStackScreen = ({navigation}) =>(
  <CarpoolStack.Navigator>
  <CarpoolStack.Screen name ="menu" component={Carpool}
  options={{
    title:"Carpool",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }}
   />
  </CarpoolStack.Navigator>
  );

const ChargingStack = createStackNavigator();
const ChargingStackScreen = ({navigation}) =>(
  <ChargingStack.Navigator>
  <ChargingStack.Screen name ="menu" component={Charging} 
  options={{
    title:"Charging",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }}
  />
  </ChargingStack.Navigator>
  );  

const MapStack = createStackNavigator();
const MapStackScreen = ({navigation}) =>(
  <MapStack.Navigator>
  <MapStack.Screen name ="menu" component={Map}
  options={{
    title:"Map",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }} 
  />
  </MapStack.Navigator>
  );  
    
const SettingsStack = createStackNavigator();
const SettingsStackScreen = ({navigation}) =>(
  <SettingsStack.Navigator>
  <SettingsStack.Screen name ="menu" component={Settings}
  options={{
    title:"Settings",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }}
   />
  </SettingsStack.Navigator>
  ); 
  
const MyAccountStack = createStackNavigator();
const MyAccountStackScreen = ({navigation}) =>(
  <MyAccountStack.Navigator>
  <MyAccountStack.Screen name ="menu" component={MyAccount}
  options={{
    title:"MyAccount",
    headerLeft:() => (
      <Icon.Button name='menu' size={25}
      backgroundColor = "#009387" onPress={() => navigation.openDrawer()}>    
      </Icon.Button>
    )
  }}
   />
  </MyAccountStack.Navigator>
  );  

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function SideBar() {
  return (

    
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="home" type="font-awesome" size={24} color={color} /> )}} />
        <Drawer.Screen name="About" component={AboutStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="card" type="font-awesome" size={24} color={color} /> )}} />
        <Drawer.Screen name="Carpool" component={CarpoolStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="car" type="font-awesome" size={24} color={color} /> )}} />        
        <Drawer.Screen name="Charging" component={ChargingStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="battery-full" type="font-awesome" size={24} color={color} /> )}} />
        <Drawer.Screen name="Map" component={MapStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="location" type="font-awesome" size={24} color={color} /> )}} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="settings" type="font-awesome" size={24} color={color} /> )}} />
        <Drawer.Screen name="MyAccount" component={MyAccountStackScreen} options={{ drawerIcon: ({ color }) => (
          <Icon name="key" type="font-awesome" size={24} color={color} /> )}} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );



}
 export default SideBar;
