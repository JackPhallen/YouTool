import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';



export default createStackNavigator(
    {
        SearchScreen: {
            screen: SearchScreen,
        },
    },
    {
        headerMode: 'none'
    }
);


