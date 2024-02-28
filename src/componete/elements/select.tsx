import styled from "styled-components";




const Select = styled.select`
    padding: 8px;
    font-size: 13pt;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 95%;
    border-radius: 4px;

    @media (max-width: 1200px) {
        width: calc( 97% - 4px);
     
    }

`

export default Select;