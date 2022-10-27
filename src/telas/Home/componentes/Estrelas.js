import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import estrela from '../../../assets/estrela.png'
import estrelaCinza from '../../../assets/estrelaCinza.png'

export default function Estrelas({quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const [quantidade, setQuantidade ] = useState(quantidadeAntiga)
    const estilo = estiloFuncao(grande)

    const getImage = (index) => {
        if(index < quantidade){
            return estrela;
        }
        return estrelaCinza;
    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++){
            listaEstrelas.push(
                <TouchableOpacity key={i} onPress={() => setQuantidade(i + 1)} disabled={!editavel}>
                    <Image source={getImage(i)} style={estilo.estrela} />   

                </TouchableOpacity>
            )
        }
        return listaEstrelas
    }
    return <View style={estilo.estrelas}>
        <RenderEstrelas />
        
    </View>
}

const estiloFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    },
    estrela:{
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})