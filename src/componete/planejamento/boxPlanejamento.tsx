import { useEffect, useState } from "react";
import Iplanejmento from "../../model/planejamento/iplanejamento";
import Item from "../elements/item";
import Row from "../elements/row";
import DataFetchPlanejamento from "../../dataFetch/dataFetchPlanejamento";
import ItemGrid from "../elements/itemGrid";
import '../home/home.css'
import ListaPLanejamento from "./listaPlanejamento";
import FormPlanejamento from "./formPlanejamento";
import Planejamento from "../../model/planejamento/planejamento";

interface  PropsBoxPlanejamento{

    listaIplanejamento      ?:   Iplanejmento [];
     

}


const BoxPlanejamento=( {listaIplanejamento}:PropsBoxPlanejamento )=>{


    const [dadosPLanejamento, setDadosPlanejamento] = useState(listaIplanejamento)
    const [planejamento, setPlanejamento] = useState( new Planejamento('', '', '',  '', '', '', '', '', '', '', ) )
    

    useEffect(()=>{
        listaPlanejamento()
    },[])

    const listaPlanejamento = async ()=>{
        const response =   new DataFetchPlanejamento('planejamento');
        setDadosPlanejamento((await response.sendGet()))

    }





return(

    <Row
        width="80%"
        border="1px solid #ccc"
    >
        <Item
            border="1px solid #000"
            flexbasis="50%"
            
        >
            <ListaPLanejamento dadosPLanejamento={dadosPLanejamento} setPlanejamento={setPlanejamento}/>

        </Item>

        


        <Item
            flexbasis="46%"
            border="1px solid #000"
        >

            <FormPlanejamento planejamento={planejamento} setPlanejamento={setPlanejamento}/>

        </Item>
    
    
    
    </Row>


)


}

export default BoxPlanejamento;