import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {SplashScreenConnect} from '../screens/SplashScreen';
import MainStack from './MainStack';
import SplashError from '../screens/SplashError';



export default createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreenConnect,
        },
        SplashError: {
            screen: SplashError
        },
        MainStack: {
            screen: MainStack
        }
    },
    {
        headerMode: 'none'
    }
);


