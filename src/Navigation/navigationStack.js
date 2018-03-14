import { StackNavigator, TabNavigator } from "react-navigation";
import Login from "../Components/Login";
import LoginOther from "../Components/LoginOther";
import ForgotPassword from "../Components/ForgotPassword";
import SignUp from "../Components/SignUp";
import Hot from "../Components/Hot";
import Movies from "../Components/Movies";
import Cinemas from "../Components/Cinemas";
import Profile from "../Components/Profile";
import Booking from "../Components/Booking";
import Details from "../Components/Details";

import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView } from 'react-native'
import { Colors, Images, Constants } from '../Themes'
import styles from './NavigationStyles'

const HotTab = StackNavigator({
  HotScreen:{ screen: Hot}
});

const MoviesTab = StackNavigator({
  MoviesScreen: {
    screen: Movies
  }
})

const CinemasTab = StackNavigator({
  CinemasScreen:{ screen: Cinemas}
})

const ProfileTab = StackNavigator({
  ProfileScreen:{ screen: Profile}
})

const TabNavigatorStack = TabNavigator({
  HotTab : { screen: HotTab,
              navigationOptions: {
                title: 'Whats Hot',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.selectflametab 
                      : Images.flametab 
                      return (
                          <Image 
                              source={image}
                              style={styles.tab1}
                          />
                      )
                  }
               },
          
             },
  MoviesTab : { screen: MoviesTab,
              navigationOptions: {
                title: 'Movies',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.selectmovietab 
                      : Images.movietab 
                      return (
                          <Image 
                              source={image}
                              style={styles.tab2}
                          />
                      )
                  }
               }
             },
  CinemasTab : { screen: CinemasTab,
              navigationOptions: {
                title: 'Alarm',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.selecttheatertab 
                      : Images.theatertab 
                      return (
                          <Image 
                              source={image}
                              style={styles.tab3}
                          />
                      )
                  }
               }
             },
  ProfileTab : { screen: ProfileTab,

              navigationOptions: {
                title: 'Profile',
                
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.selectprofiletab 
                      : Images.profiletab  
                      return (
                          <Image 
                              source={image}
                              style={styles.tab4}
                          />
                      )
                  }
               }
             },
},
  {
    initialRouteName:"HotTab",
    tabBarPosition:'bottom',
    tabBarOptions: {
      labelStyle: {
        fontSize: Constants.FONT*14,
        textAlign:'center',
        marginBottom: Constants.MARGIN*1.5,
      },
      style: {
		borderWidth: 0,
		borderColor:'red',
		height: Constants.MARGIN*15,
		backgroundColor: 'white',
		shadowColor: '#f1f1f1',
		shadowRadius: 0,
		shadowOpacity: 0.8,
		shadowOffset: {
		height: -3,
		width: 0,
		},
	  },
      showIcon:true,
      showLabel:true,
      activeTintColor:"#007ab9",
      inactiveTintColor:"#b2b2b2"
    },
  });

const navigator = StackNavigator({
  Login: {
    screen: Login
  },
  LoginOther: {
    screen: LoginOther
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  SignUp: {
    screen: SignUp
  },
  TabNavigatorStack: { 
  	screen: TabNavigatorStack 
  },
  Booking: {
    screen: Booking
  },
  Details: {
    screen: Details
  },
});

export default navigator;
