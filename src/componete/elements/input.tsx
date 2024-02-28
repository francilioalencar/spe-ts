import styled from "styled-components";




const Input = styled.input`
    padding: 8px;
    font-size: 13pt;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 95%;
    border-radius: 4px;
    border: 1px solid #ccc;

    .dt{
        width: 500px;
        border:1px solid #000;
    }



    @media (max-width: 1200px) {
        width: calc( 97% - 4px);
     
    }




`

export default Input;