import styled from "styled-components";


interface PropsItemMenu{
    backgroud?:string;
}

const ItemMenu = styled.div<PropsItemMenu>`
    padding: 12px;
    flex-basis: 100%;
    column-gap: 4px;
    row-gap: 4px;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    border-top-left-radius: 0px;
    margin-top:4px;
    

    *:hover {
        background-color: #c0c0c0; /* Altera a cor de fundo quando o mouse está sobre o item */
    }


    @media (max-width: 700px) {
        width: 98%;
        flex-direction: column;
        padding: 4px;
    }


    


`



export default ItemMenu;