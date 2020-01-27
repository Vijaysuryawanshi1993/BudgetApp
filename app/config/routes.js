import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from "../screens/Home";

const RootNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            header: null
        },
    },
    {
        transitionConfig: getSlideFromRightTransition
    }
);

export default createAppContainer(RootNavigator);
