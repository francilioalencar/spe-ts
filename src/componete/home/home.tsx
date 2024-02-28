import { useState } from "react"
import Column from "../elements/div-column"
import ItemMenu from "../elements/item-menu"
import Row from "../elements/row"
import './home.css'
import BoxEmpresa from "../empresa/boxEmpresa"
import BoxPlanejamento from "../planejamento/boxPlanejamento"
const Home = ()=>{


    const [itemMenu, setItemMenu] = useState(0);


    const handleItemMenu=(item: number):void=>{

        setItemMenu(item);

    }



    return(
        <Row 
            width="90vw"
            border="0.2px solid #ccc" 
            height={'90vh'}
        >
            <Column 
                width="3vw"
                border="0.2px solid #fff" 
            >
                <ItemMenu 
                    className={itemMenu===1 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(1))}
                >
                    Empresa
                </ItemMenu>
                
                <ItemMenu 
                    className={itemMenu===2 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(2))}
                >
                    Identidade
                </ItemMenu>
                

                <ItemMenu 
                    className={itemMenu===3 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(3))}
                >
                    Planejamento
                </ItemMenu>

                <ItemMenu 
                    className={itemMenu===4 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(4))}
                >
                    Objetivos
                </ItemMenu>

                <ItemMenu 
                    className={itemMenu===5 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(5))}
                >
                    SWOT
                </ItemMenu>
                
                <ItemMenu 
                    className={itemMenu===6 ? 'hover select' : 'hover none'}
                    onClick={()=>(handleItemMenu(6))}
                >
                    OKR's
                </ItemMenu>
                

                
            


            </Column>

            <BoxPlanejamento/>
            {/* <BoxEmpresa /> */}





        </Row>
    )


}

export default Home;