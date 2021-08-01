import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native"
import FirstScreen from "./Tabs/FirstScreen"
import SecondScreen from "./Tabs/SecondScreen"

const Tab = createMaterialTopTabNavigator();

function TabView(props){
  console.log(props)
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="New tasks">
      {() => <FirstScreen taskdata={props.taskdata} />}
      </Tab.Screen>
        <Tab.Screen name="Completed" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabView;