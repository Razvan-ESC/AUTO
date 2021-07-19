import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Carpool from '../screens/Carpool';
import Charging from '../screens/Charging';
import Map from '../screens/Map';
import Settings from '../screens/Settings';
import MyAccount from '../screens/MyAccount';





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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MyAccount" component={MyAccount} />
        <Drawer.Screen name="Charging" component={Charging} />
        <Drawer.Screen name="Carpool" component={Carpool} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 export default SideBar;
