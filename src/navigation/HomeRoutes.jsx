import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "../constants/ScreenName";

import Home from "../screen/HomeScreen/Home";
import Category from "../screen/CategoryScreen/Category";
import AddMusic from "../screen/AddMusicScreen/AddMusic";
import Customize from "../screen/CustomizeScreen/Customize";
import Story from "../screen/StoryScreen/Story";
import SaveAndShare from "../screen/Save&ShareScreen/SaveAndShare";
import Preview from "../screen/PreviewScreen/Preview";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.Home}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenName.Home}
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenName.Category}
        component={Category}
      />
      <Stack.Screen name={ScreenName.AddMusic} component={AddMusic} />
      <Stack.Screen name={ScreenName.Customize} component={Customize} />
      <Stack.Screen name={ScreenName.Story} component={Story} />
      <Stack.Screen name={ScreenName.SaveAndShare} component={SaveAndShare} />
      <Stack.Screen name={ScreenName.Preview} component={Preview} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
