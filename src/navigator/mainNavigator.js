import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
// import BlankScreen114504Navigator from '../features/BlankScreen114504/navigator';
import BlankScreen014493Navigator from '../features/BlankScreen014493/navigator';
import EmailAuthNavigator from "../features/EmailAuth/navigator";
import Sign from '../features/EmailAuth/screens/index'
/**
 * new navigators can be imported here
 */
// Add this to make your authentication manditory before displaying the rest of the application
const DrawerScreens = {
  // to make non-manditory uncomment this
  //  Sign,
  BlankScreen014493Navigator:{
    screen:BlankScreen014493Navigator
  }
}
const DrawerAppNavigator = createDrawerNavigator(
  {
    ...DrawerScreens,
  },
  {
    contentComponent: SideMenu
  },
);
const switchScreens = {
  // comment this to make it non-manditory
  EmailAuth: {
    screen: EmailAuthNavigator,
  },
  DrawerAppNavigator,
};
const switchSettings = {
  // initialRouteName: 'TestScreen',
  //backBehavior:'initialRoute'
};
// end auth updates
// auth updates to be included
const SwitchNavigator = createSwitchNavigator(switchScreens, switchSettings);
// end updates
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
