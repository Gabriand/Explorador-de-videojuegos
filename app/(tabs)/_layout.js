import { Tabs } from "expo-router";
import { View } from "react-native";

import { CircleInfoIcon, HomeIcon } from "../../components/Icons";

export default function TabsLayout() {
    return <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "black", borderColor: "black" },
            tabBarActiveTintColor: "purple",
            
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color }) => <HomeIcon color={color} />
            }}
        />
        <Tabs.Screen 
            name="about"
            options={{
                title: "about",
                tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />
            }}
        />
    </Tabs>
}