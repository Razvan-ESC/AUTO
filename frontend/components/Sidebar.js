import * as React from 'react';
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
  <AboutStack.Screen name ="About" component={About} />
  </AboutStack.Navigator>
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
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 export default SideBar;
