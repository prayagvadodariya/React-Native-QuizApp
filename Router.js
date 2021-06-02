import React from 'react';
import { TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Notification from './src/Screens/Notification';
import Colours from './src/Screens/Colours';
import Setting from './src/Screens/Setting';
import QuizDashboard from './src/Screens/QuizDashboard';
import Score from './src/Screens/Score';
import AddQuiz from './src/Screens/AddQuiz';
import Add_Quiz_Categories from './src/Screens/Add_Quiz_Categories';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:"#06d3f7",
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />)
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />)
        }}
      />
      <Tab.Screen
        name="Colours"
        component={Colours}
        options={{
          tabBarLabel: 'Colours',
          tabBarIcon: ({ color }) => (
            <Entypo name="colours" color={color} size={26} />)
        }}
      />
       <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={26} />)
        }}
      />
    </Tab.Navigator>
  );
};

const MyStack = () => {

  return (
    <Stack.Navigator initialRouteName="QuizDashboard">
      <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="QuizDashboard" component={QuizDashboard} />
      <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="Score" component={Score} />
    </Stack.Navigator>
  )
}

const UserAddQuiz = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}}  name="User Add New Quiz" component={AddQuiz} />
    </Stack.Navigator>
  )
}

const AddQuizCategories = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="Add Quiz Categories" component={Add_Quiz_Categories}/>
    </Stack.Navigator>
  )
}

const Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTabStack">
          <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="BottomTabStack" component={BottomTabStack} />
          <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="MyStack" component={MyStack} />
          <Stack.Screen name="UserAddQuiz" component={UserAddQuiz} />
          <Stack.Screen name="AddQuizCategories" component={AddQuizCategories} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
export default Router;