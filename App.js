import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageScreen from './src/screens/ImageScreen';
import StateScreen from './src/screens/StateScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import ColorButton from './src/screens/ColorButton';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
        State: StateScreen,
        Color: ColorScreen,
        ColorButton: ColorButton,
        SquareScreen: SquareScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  },
);

export default createAppContainer(navigator);
