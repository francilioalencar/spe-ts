import { useEffect, useState } from "react";
import Column from "../elements/div-column";
import Row from "../elements/row";
import EmpresaView from "./empres-componete";
import ListaEmpresa from "./listaEmpresa";
import Empresa from "../../model/empresa/empresa";
import Iempresa from "../../model/empresa/iempresa";
import requestGet from '../../dataFetch/dataFetchEmpresa'

interface PropsPlanejamento{

    codigoPlano     ?:    number;
    codigoUsuario   ?:  number;
    listaIEmpresa   ?:  Iempresa[],
    


}


const BoxEmpresa=({codigoPlano, codigoUsuario, listaIEmpresa}: PropsPlanejamento)=>{

    const [empresa, setEmpresa] = useState( new Empresa('', '', '', '', '', '', '') )
    
    const [ieAtualizaLista, setIeAtualizaLista] = useState(false)

    const [dados, setDados] = useState( listaIEmpresa )

    useEffect(()=>{
        fetchData()

    },[])

    useEffect(()=>{
        setIeAtualizaLista(false)
        fetchData()
    },[ieAtualizaLista === true])

    //Obtem lista de DataFetch
    const fetchData = async ()  => {
        setDados( await requestGet.requestGet('/estabelecimento'))
    }



    return(

        <Row
            width="70%"
        >
            <ListaEmpresa  
                setEmpresa={setEmpresa} 
                listaIEmpresa={dados} 
            />

            <Column 
                className="row" 
                width="20vw"
                border="1px solid #ccc" 
            >
                <EmpresaView empresa={empresa} setEmpresa={setEmpresa} setIeAtualizaLista={setIeAtualizaLista} />

            </Column>
        </Row>

    )

}

export default BoxEmpresa;