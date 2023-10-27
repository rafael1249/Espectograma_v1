
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {StyleSheet, Text, View } from 'react-native';
import Feed from "../Screens/Feed"
import CreatePost from "../Screens/CreatePost";



const BottomTabNavigator = () => {
    render(

        <Tab.Navigator>
      
            screenOptions={({ route }) =>{{
                tabBarIcon: {{ focused, color, size}} => {
                    let iconMane;
                    if (route.name === 'Feed') {
                        iconName = focused
                        ? 'book'
                        : 'book-outline';
                        
                    }
                    
                }
            }}
            }
          </Tab.Navigator>
    

    )
    
}
