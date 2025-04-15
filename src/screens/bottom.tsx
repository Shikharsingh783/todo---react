import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TodoScreen from './Todo';

// Your Screens
const HomeScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);

const Todo = () => (
  <View style={{flex: 1}}>
    <TodoScreen />
  </View>
);

const SettingsScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 25,
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#000', // or any color
          height: 60,
          paddingBottom: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 10},
          shadowRadius: 10,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Todo') iconName = 'list-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';

          return <Icon name={iconName as string} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
