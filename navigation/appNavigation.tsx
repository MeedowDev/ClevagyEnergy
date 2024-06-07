import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen";
import { LogBox } from "react-native";

import AdvisorScreen from "../screens/AdvisorScreen";
import MenuScreen from "../screens/MenuScreen";
import { LogBox } from "react-native";
import { RootStackParamList } from '../types';


const Stack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" options={{ headerShown: true }} component={HomeScreen} />
				<Stack.Screen
					name="Advisor"
					options={{
						headerTitle: "Advisor",
					}}
					component={AdvisorScreen}
				/>
				 <Stack.Screen
                    name="Menu"
                    options={{
                        headerTitle: "Menu",
                    }}
                    component={MenuScreen}
                />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
