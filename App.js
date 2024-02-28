

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import testomegIndex from './components/testomegIndex';

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Testtömeg Index" component={testomegIndex} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );

  }
