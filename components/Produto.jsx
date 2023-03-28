import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"

function Produto(props) {
    const [qtd, setQtd] = useState(0)

    function add() {
        setQtd(qtd + 1)
        props.callBackAdd(props.produto.preco)
    }

    function rmv() {
        if (qtd != 0) {
            setQtd(qtd - 1)
            props.callBackRmv(props.produto.preco)
        }
    }

    return(
        <View key={props.index} style={styles.container}>
            <View>
                <Text style={styles.txt}>Nome: {props.produto.nome}</Text>
                <Text style={styles.txt}>Descrição: {props.produto.desc}</Text>
                <Text style={styles.txt}>Preço: R${props.produto.preco}</Text>
                <Text style={styles.txt}>Quant.: {qtd}</Text>
            </View>

            <View style={styles.buttons}>
                <Pressable style={[styles.button, styles.btnAdd]} onPress={() => { add() }}>
                    <Text style={styles.txtBtn}>+</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.btnRmv]} onPress={() => { rmv() }}>
                    <Text style={styles.txtBtn}>-</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#c1c1c1',
        width: 200,
        margin: 20
    },

    txt: {
        fontWeight: 'bold'
    },

    buttons: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 20,
        width: 50,
        height: 50
    },

    txtBtn: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center",
        marginBottom: 10
    },

    btnAdd: {
        backgroundColor: 'green'
    },

    btnRmv: {
        backgroundColor: 'red'
    }
})

export default Produto