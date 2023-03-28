import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { ScrollView } from "react-native-web"
import Produto from "./Produto"

function Produtos() {
    const [total, setTotal] = useState(0)

    function callBackAdd(preco) {
        setTotal(total + preco)
    }

    function calBackRmv(preco) {
        if (total != 0) {
            setTotal(total - preco)
        }
    }

    const produtos = [
        { nome: "Barra de chocolate diet", desc: "Uma barra de chocolate com menos açucar.", preco: 10.00 },
        { nome: "Creatina", desc: "Galão de creatina.", preco: 50.00 },
        { nome: "Esteira", desc: "Uma ótima máquina para exercícios.", preco: 500.00 },
        { nome: "Tênis de corrida", desc: "Um dos tênis mais tecnológicos até o momento.", preco: 400.00 },
        { nome: "Camiseta regata", desc: "Uma vestimenta apropriada para um rotina corrida.", preco: 20.00 },
        { nome: "Pesos de 5kg", desc: "Pesos para praticar exercícios onde quiser.", preco: 100.00 },
        { nome: "Arroz integral", desc: "Um saco de 10kg de arroz integral, ótimo para receitas.", preco: 30.00 },
        { nome: "Filé de Saint Piter", desc: "Filés muito saborosos de Saint Piter, perfeito para uma dieta.", preco: 80.00 }
    ]
    
    return(
        <View style={styles.main}>
            <ScrollView style={styles.viewProdutos}>
                {
                    produtos.map((produto, index) => 
                        <Produto
                            index={index}
                            produto={produto}
                            callBackAdd={callBackAdd}
                            callBackRmv={calBackRmv}
                        />
                    )
                }
            </ScrollView>
            <Text><Text>Total: </Text>R$ {total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
    },

    viewProdutos: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center"
    }
})

export default Produtos