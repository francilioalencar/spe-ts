import styled from "styled-components";

interface PorposTextArea{
    width?: string;
    height?: string;
}


const Textarea = styled.textarea<PorposTextArea>`
    padding: 8px;
    font-size: 13pt;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     border-radius: 4px;
    max-width:${props=>props.width || '95%'};
    width:${props=>props.width || '95%'};
    max-height:${props=>props.height || '250px%'};
    height:${props=>props.height || '250px%'};
    resize: none;
    

    @media (max-width: 1200px) {
        width: calc( 97% - 4px);
     
    }

`

export default Textarea;