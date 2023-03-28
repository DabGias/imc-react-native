import React from "react"
import { Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Calc from "./Calc"

function HomeScreen() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Início" component={Home}/>
                <Tab.Screen name="Calculadora" component={Calc}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function Home() {
    return(
        <>
            <Text>Esse é o home 👍</Text>
        </>
    )
}

export default Home