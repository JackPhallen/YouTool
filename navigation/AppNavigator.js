import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import PlantListContainer from '../screens/PlantList';
import AddPlantContainer from '../screens/AddPlant';



const PlantListStack = createStackNavigator(
  {
    PlantList: {
      screen: PlantListContainer,
    },
    AddPlant: {
      screen: AddPlantContainer,
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

let PlantListStackContainer = createAppContainer(PlantListStack);
export default PlantListStackContainer;

