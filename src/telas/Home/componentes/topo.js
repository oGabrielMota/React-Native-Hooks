import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png'

export default function Topo() {
    return (
        <View style={estilo.topo}>
            <Image style={estilo.imagem} source={logo} />
            <Text style={estilo.nome}>Olá Gabriel</Text>
            <Text style={estilo.descricao}>Encontre os melhores produtores</Text>
        </View>
        

    )
}

const estilo = StyleSheet.create({
    topo:{
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    nome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646"

    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    },
})