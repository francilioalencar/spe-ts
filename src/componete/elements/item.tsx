import styled from "styled-components";


interface PropsItem{
    flexbasis?:  string;
    border?:     string;
}

const Item = styled.div<PropsItem>`
    
    padding: 12px;
    flex-basis:         ${props=>props.flexbasis|| '100%'};
    border:             ${props=>props.border|| 'none'};
    column-gap: 4px;
    row-gap: 4px;
    margin-top:4px;
    cursor: pointer;
    
    @media (max-width: 700px) {
        width: 98%;
        flex-direction: column;
        padding: 4px;
    }



`



export default Item;