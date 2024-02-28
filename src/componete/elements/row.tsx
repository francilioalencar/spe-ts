import styled from "styled-components";

interface PorpsDiv{
    width       ?: string;
    height      ?: string;
    border      ?: string;
    background  ?: string;
    fontWeight  ?: string;
    columngap   ?: string;
}



const Row = styled.div<PorpsDiv>`
    
    display: flex;
    flex-wrap: wrap;
    flex-grow:1;
    
    /*Ajusta elementos na linha*/
    flex-direction: row;
    
    /*-------------------------*/
    padding: 4px;
    column-gap: 4px;
    column-gap: ${props=> props.columngap || '4px'};
    row-gap:    ${props=> props.columngap || '4px'};
    
    /*Ajusta lado direito e esquedo*/
    
    margin-left:auto;
    margin-right:auto;
    /*-----------------------------*/
    
    /* utiliza as props para possibilitar cinfigurar componet */
    height:  ${props=> props.height || 'auto%'};
    width:  ${props=> props.width || '100%'};
    border: ${props=> props.border || 'none'};
    font-weight: ${props=> props.fontWeight || 'none'};
    




    @media (max-width: 700px) {
        width: 98%;
        flex-direction: column;
        padding: 4px;
    }


`
export default Row;

