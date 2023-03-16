import React from "react"
import { StyleSheet, View } from "react-native"
import Produto from "./Produto"

function Produtos() {
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
            <Produto produto={produtos[0]}/>
            <Produto produto={produtos[1]}/>
            <Produto produto={produtos[2]}/>
            <Produto produto={produtos[3]}/>
            <Produto produto={produtos[4]}/>
            <Produto produto={produtos[5]}/>
            <Produto produto={produtos[6]}/>
            <Produto produto={produtos[7]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default Produtos