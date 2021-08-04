import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';


import "bootstrap/dist/css/bootstrap.min.css";
import "./animate.min.css";
import "./demo.css";
import "./light-bootstrap-dashboard-react.css";
import "./light-bootstrap-dashboard-react.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);
  
