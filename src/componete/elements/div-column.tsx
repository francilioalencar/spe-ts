import styled from "styled-components";

interface PorpsDiv{
    width?: string;
    height?: string;
    border?: string;
}



const Column = styled.div<PorpsDiv>`
    
    
    /*Ajusta elementos na linha*/
    flex-direction: column;
    flex-grow:1;
    diplay:flex;

    /*-------------------------*/
    padding: 4px;
    column-gap: 4px;
    row-gap: 4px
    /*Ajusta lado direito e esquedo*/
    
    margin-left:auto;
    margin-right:auto;
    /*-----------------------------*/
    
    /* utiliza as props para possibilitar cinfigurar componet */
    height:  ${props=> props.height || 'auto%'};
    width:  ${props=> props.width || '100%'};
    border: ${props=> props.border || 'none'};
    




    @media (max-width: 700px) {
        width: 98%;
        flex-direction: column;
        padding: 4px;
    }


`
export default Column;

