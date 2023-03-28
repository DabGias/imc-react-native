import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./Home"
import Calc from "./Calc"
import Produtos from "./Produtos"

function Router() {
    return(
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Início" component={Home}/>
                    <Drawer.Screen name="Calculadora" component={Calc}/>
                    <Drawer.Screen name="Loja" component={Produtos} options={{ title: "Escolha seu produto:" }}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router