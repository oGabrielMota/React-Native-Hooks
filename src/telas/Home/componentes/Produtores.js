import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native'

import carregaProdutores from '../../../services/carregaDados'
import Produtor from './Produtor'

export default function Produtores({topo: Topo}){
    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState('')

    useEffect(() =>{
        const retorno = carregaProdutores() 
        setTitulo(retorno.titulo)
        setLista(retorno.lista)
    },[])

    const TopoLista = () => {
        return <>
            <Topo/>
            <Text style={estilo.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={TopoLista}
        renderItem={({item })=> <Produtor {...item} />}
    />
}

const estilo = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    },
    nomeLista: {

    },
})