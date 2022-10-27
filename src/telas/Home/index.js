import React from 'react';
import Topo from '../Home/componentes/topo';
import Produtores from '../Home/componentes/Produtores'


export default function Home(){
    return <>
        <Produtores topo={Topo}/>
    </>
}

