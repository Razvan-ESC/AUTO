import * as React from 'react';
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import Carpool from './screens/CarpoolScreen';
import Charging from './screens/ChargingScreen';
import Map from './screens/MapScreen';
import MyAccount from './screens/MyAccountScreen';
import Settings from './screens/SettingsScreen';
import SignIn from './screens/SignInScreen';
import SignUp from './screens/SignUpScreen';
import SideBar from './components/Sidebar';

const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Home"
            component = { Home }
          />
          <Stack.Screen
            name = "About"
            component = { About }
          />
          <Stack.Screen
            name = "Carpool"
            component = { Carpool }
          />
          <Stack.Screen
            name = "Charging"
            component = { Charging }
          />
          <Stack.Screen
            name = "Map"
            component = { Map }
          />
          <Stack.Screen
            name = "MyAccount"
            component = { MyAccount }
          />
          <Stack.Screen
            name = "SignIn"
            component = { SignIn }
          />
          <Stack.Screen
            name = "SignUp"
            component = { SignUp }
          />
          <Stack.Screen
            name = "Settings"
            component = { Settings }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
