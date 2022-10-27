import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import  Estrelas  from '../componentes/Estrelas'


export default function Produtor({nome, imagem, distancia, estrelas}){
    const [selecionado,setSelecionado] = useState(false)

    return (
    <TouchableOpacity style={estilo.cartao}
        onPress={() => setSelecionado(!selecionado)}
    >
        <Image style={estilo.imagem} source={imagem}  acessibilityLabel={nome}/>
        <View style={estilo.info}>
            <View>
                <Text style={estilo.nome} > {nome} </Text>
                <Estrelas quantidade={estrelas}
                editavel={selecionado}
                grande={selecionado}
                />
            </View>
            <Text style={estilo.distancia} > {distancia} </Text>
        </View>
    </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 16
    },
    imagem: {
        width: 58,
        height: 58,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    },
})