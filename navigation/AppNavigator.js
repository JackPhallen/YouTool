import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import PlantListContainer from '../screens/PlantList';



const YouToolStack = createStackNavigator(
  {
    PlantList: {
      screen: PlantListContainer,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7ab640',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

let YouToolStackContainer = createAppContainer(YouToolStack);
export default YouToolStackContainer;

