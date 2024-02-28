import styled from "styled-components";


interface PropsItem{
    flexBasis?:  string;
    border?:     string;
}

const ItemGrid = styled.div<PropsItem>`
    
    flex-basis:         ${props=>props.flexBasis|| '100%'};
    border:             ${props=>props.border|| 'none'};
    column-gap: 4px;
    row-gap: 4px;
    border-bottom: 1px solid #ccc;
    margin:auto;
    

    @media (max-width: 700px) {
        width: 98%;
        flex-direction: column;
        padding: 4px;
    }



`



export default ItemGrid;