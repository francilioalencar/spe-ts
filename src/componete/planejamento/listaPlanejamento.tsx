import { useState } from "react";
import Iplanejmento from "../../model/planejamento/iplanejamento";
import Item from "../elements/item"
import Row from "../elements/row"
import ItemGrid from "../elements/itemGrid";
import Planejamento from "../../model/planejamento/planejamento";


interface ProposListaPLanejamento{

    dadosPLanejamento       :   Iplanejmento [] | undefined;
    setPlanejamento         :   React.Dispatch<React.SetStateAction<Planejamento>>
}

const ListaPLanejamento =({dadosPLanejamento, setPlanejamento}:ProposListaPLanejamento)=>{

    const [codigoSelect, setCodigoSelect] = useState('0')

    const handleListaEmpresa =(codigo: string)=>{

        setCodigoSelect(codigo)
        
        if(dadosPLanejamento === undefined)
            return null;
        else
        setPlanejamento( Planejamento.setPlanejamento(  dadosPLanejamento.filter( item=>item.codigo===codigo )[0]  ) )
    }

    return(
        <section>
    <Row
        width="90%"
        fontWeight="bold"    
        className="headerGrid"
    >
        <Item
            flexbasis="15%"
            className="headerGrid"
        >
            Código
        </Item>
        <Item
            flexbasis="40%"
        >
            Empresa
        </Item>
        {/* <Item
            flexbasis="20%"
        >
            CNPJ/CPF
        </Item> */}
        <Item
            flexbasis="5%"
        >
            Situação
        </Item>

    </Row>
    {
    dadosPLanejamento?.map( iplanejamento =>(
    
    <section>
    <Row
        width="90%"
        columngap="0px"
        onClick={ () => handleListaEmpresa(iplanejamento.codigo)  }
        className={codigoSelect===iplanejamento.codigo ? 'hoverGrid selectGrid' : 'hoverGrid noneGrid'}
            
    >
        <Item
            flexbasis="15%"
        >
            {iplanejamento.codigo}
        </Item>
        <Item
            flexbasis="40%"
        >
            {iplanejamento.descricao}
        </Item>
        {/* <Item
            flexbasis="20%"
        >
            {iplanejamento.ano_inicio}
            {iplanejamento.ano_fim}
        </Item> */}

        <Item
            flexbasis="5%"
        >
            {iplanejamento.situacao}
        </Item>

    </Row>
    <Row
        width="90%"
        columngap="0px"
            
    >
        <ItemGrid
            flexBasis="100%"
        ></ItemGrid>

    </Row>
    
    </section>
    
    ))
    }
    </section>
    )
}

export default ListaPLanejamento;