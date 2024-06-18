import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePageScreen from '../Screens/HomePage';

const Drawer = createDrawerNavigator();


function DrawerNavigation(){

return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomePageScreen} />
    </Drawer.Navigator>
)

};

export default DrawerNavigation;