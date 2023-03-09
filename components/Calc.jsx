import React from 'react'
import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

function Calc() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    
    return(
        <>
            <View>
                <View style={styles.inputs}>
                    <Text>Peso</Text>
                    <TextInput editable onChangeText={text => setPeso(text)} value={peso} style={styles.input}/>

                    <Text>Altura</Text>
                    <TextInput editable onChangeText={text => setAltura(text)} value={altura} style={styles.input}/>
                </View>

                <Pressable style={styles.buttonCalc} onPress={() => {
                    setImc(peso / (altura * altura))
                }}>
                    <Text>Calcular</Text>
                </Pressable>

                {imc == 0 ? "" : <Text style={styles.imcMsg}>O seu IMC é de: {imc.toFixed(2)}</Text>}
                {imc == 0 ? "" 
                : imc < 18.5 ? <Text style={styles.imcMsg}>Você está em estado de magreza!</Text>
                : imc < 24.9 ? <Text style={styles.imcMsg}>Você está em boa forma!</Text>
                : imc < 29.9 ? <Text style={styles.imcMsg}>Você está com sobrepeso!</Text>
                : imc < 34.9 ? <Text style={styles.imcMsg}>Você está com obesidade grau I!</Text>
                : imc < 39.9 ? <Text style={styles.imcMsg}>Você está com obesidade grau II!</Text>
                : <Text style={styles.imcMsg}>Você está com obesidade grau III!</Text>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    input: {
        padding: 10,
        backgroundColor: '#121212',
        color: '#fefefe'
    },
    
    buttonCalc: {
        textAlign: 'center',
        backgroundColor: '#002bff',
        padding: 10,
        borderRadius: 20
    },

    imcMsg: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Calc