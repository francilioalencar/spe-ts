import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import Iempresa from "../../model/empresa/iempresa";

import Row from "../elements/row";
import Item from "../elements/item";
import Column from "../elements/div-column";
import ItemGrid from "../elements/itemGrid";
import Empresa from "../../model/empresa/empresa";
import '../home/home.css'


interface PropsListaEmpresa{

    codigoEmpresa   ?:  number;
    codigoUsuario   ?:  number;
    

    listaIEmpresa   ?:  Iempresa[],
    setEmpresa : React.Dispatch<React.SetStateAction<Empresa>>;
    


}


const ListaEmpresa =({codigoEmpresa, codigoUsuario, listaIEmpresa, setEmpresa}:PropsListaEmpresa)=>{

    

    const [codigoSelect, setCodigoSelect] = useState('0')
    
    

    const handleListaEmpresa =(codigo: string)=>{
        let empresa : Empresa;
        let emp= listaIEmpresa?.find(item => item.codigo === codigo);
        setCodigoSelect(codigo)
        if (!emp) {
            return null;   
        }else{
        
            empresa = new Empresa(emp.codigo, emp.descricao, emp.area_atuacao, emp.tipo, emp.cnpj, emp.cpf, '')
            setEmpresa(empresa);
        }
    }





    return(
        <Column 
                className="row" 
                width="40vw"
                border="1px solid #ccc" 
            >

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
                <Item
                    flexbasis="20%"
                >
                    CNPJ/CPF
                </Item>
                <Item
                    flexbasis="5%"
                >
                    Situação
                </Item>

            </Row>
    {
        listaIEmpresa?.map( empresa =>(
            
            <section>
            <Row
                width="90%"
                columngap="0px"
                onClick={ () => handleListaEmpresa(empresa.codigo)  }
                className={codigoSelect===empresa.codigo ? 'hoverGrid selectGrid' : 'hoverGrid noneGrid'}
                    
            >
                <Item
                    flexbasis="15%"
                >
                    {empresa.codigo}
                </Item>
                <Item
                    flexbasis="40%"
                >
                    {empresa.descricao}
                </Item>
                <Item
                    flexbasis="20%"
                >
                    {empresa.cnpj}
                    {empresa.cpf}
                </Item>

                <Item
                    flexbasis="5%"
                >
                    {empresa.situacao}
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

        </Column>
    )





}

export default ListaEmpresa;