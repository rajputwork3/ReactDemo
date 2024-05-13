import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { openDatabase } from 'expo-sqlite';
import  { creatTable,insertData,retrieveData } from './DB/utils';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Component/HomeScreen';
import NotificationsScreen from './Component/NotificationsScreen';
import AuthStackNavigator from './Navigation/AuthStackNavigator';
// Open or create the database
const db = openDatabase('example.db');
const Drawer = createDrawerNavigator();
export default function App() {
useEffect(()=>{
creatTable(db);
},[])

  return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Check the console for database operations.</Text>
//       <TouchableOpacity onPress={()=>{
// insertData(db);
//       }}>
//       <Text >{"Press"}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>{
// retrieveData(db);
//       }}>
//       <Text >{"Retrieve"}</Text>
//       </TouchableOpacity>
//     </View>
<NavigationContainer>
{/* <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Notifications" component={NotificationsScreen} />
</Drawer.Navigator> */}
 {false
 //loginState.user !== null && loginState.user.authToken 
 ? ( //company details are fetched at company screen, authtoken is fetched later in password screen
                <Drawer.Navigator
                  drawerContent={(props) => <DrawerContent {...props} />}
                >
                  <Drawer.Screen
                    name="HomeScreen"
                    component={RootStackNavigator}
                  />
                </Drawer.Navigator>
              ) : (
                <AuthStackNavigator
                  passwordScreen={
                   false// loginState.user !== null && loginState.user.userName
                      ? true
                      : false
                  } // 1st render will be for email screen. when we have user and company details we land on password screen
                />
              )}
</NavigationContainer>
  );
}
