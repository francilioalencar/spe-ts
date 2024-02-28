import Planejamento from "../../model/planejamento/planejamento"
import Button from "../elements/button"
import Column from "../elements/div-column"
import Input from "../elements/input"
import Item from "../elements/item"
import Label from "../elements/label"
import Row from "../elements/row"
import Textarea from "../elements/textarea"


interface PropsFormPlanejamento{
    planejamento    : Planejamento;
    setPlanejamento : React.Dispatch<React.SetStateAction<Planejamento>>
}


const FormPlanejamento=({planejamento, setPlanejamento}:PropsFormPlanejamento)=>{


    let codigo          =  document.querySelector('input[name=codigo]') as HTMLInputElement;
    let codigo_empresa  =  document.querySelector('input[name=codigo_empresa]') as HTMLInputElement;
    let descricao       =  document.querySelector('textarea[name=descricao]') as HTMLInputElement;
    let ano_inicio      =  document.querySelector('input[name=ano_inicio]') as HTMLInputElement;
    let ano_fim         =  document.querySelector('input[name=ano_fim]') as HTMLInputElement;
    let missao          =  document.querySelector('textarea[name=missao]') as HTMLInputElement;
    let visao           =  document.querySelector('textarea[name=visao]') as HTMLInputElement;
    let valores         =  document.querySelector('textarea[name=valores]') as HTMLInputElement;
    let proposito       =  document.querySelector('textarea[name=proposito]') as HTMLInputElement;
    let situacao        =  document.querySelector('input[name=situacao]') as HTMLInputElement;



    const handlePlanejamento=(target: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement)=>{
        const iplanejamento ={
            codigo:         codigo.value ,
            codigo_empresa: codigo_empresa.value,
            descricao:      descricao.value,
            ano_inicio:     ano_inicio.value,
            ano_fim:        ano_fim.value,
            missao:         missao.value,
            visao:          visao.value,
            valores:        valores.value,
            proposito:      proposito.value,
            situacao:       situacao.value
        }

        console.log(iplanejamento)

        setPlanejamento( new Planejamento('', '', '', '', '', '', '', '', '', '', ))
        //setPlanejamento( Planejamento.setPlanejamento(iplanejamento) )
    }


    return(

        <section>

        <Column
            width="100%"
            
        >

            <Row 
                width="100%"
                
            >        
                <Item
                    flexbasis="calc(48% - 18px)"
                    
                >
                    <Label>Código</Label>
                    <Input 
                        width={'50%'}
                        name="codigo" 
                        id="codigo"
                        value={planejamento.getIplanejamento().codigo} 
                        onChange={( event)=>{handlePlanejamento( event.target)}}
                    />

                </Item>
                <Item
                    flexbasis="calc(48% - 18px)"
                >
                    <Label>Código Empresa</Label>
                    <Input 
                        name="codigo_empresa" 
                        id="codigo_empresa"
                        value={planejamento.getIplanejamento().codigo_empresa} 
                        onChange={( event)=>{handlePlanejamento( event.target)}}
                    />

                </Item>
            </Row>

            <Item>
                <Label>Descrição</Label>
                <Input 
                    name="descricao" 
                    id="descricao"
                    value={planejamento.getIplanejamento().descricao} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                />

            </Item>

            <Row
                width="100%"
            >
             
            <Item
                flexbasis="calc(48% - 18px)"
            >
                <Label>Data início</Label>
                <Input 
                    type="date"
                    name="ano_inicio" 
                    id="ano_inicio"
                    value={planejamento.getIplanejamento().ano_inicio} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                />

            </Item>


            <Item
                flexbasis="calc(48% - 18px)"
            >
                <Label>Data fim</Label>
                <Input 
                    type="date"
                    name="ano_fim" 
                    id="ano_fim"
                    value={planejamento.getIplanejamento().ano_fim} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                />

            </Item>
            </Row>
            
            <Item>
                <Label>Missão</Label>
                <Textarea 
                    name="missao" 
                    id="missao"
                    value={planejamento.getIplanejamento().missao} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                >
                </Textarea>

            </Item>

            <Item>
                <Label>Visão</Label>
                <Textarea 
                    name="visao" 
                    id="visao"
                    value={planejamento.getIplanejamento().visao} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                >
                </Textarea>

            </Item>

            <Item>
                <Label>Valores</Label>
                <Textarea 
                    name="valores" 
                    id="valores"
                    value={planejamento.getIplanejamento().valores} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                >
                </Textarea>

            </Item>

            <Item>
                <Label>Proposito</Label>
                <Textarea 
                    name="proposito" 
                    id="proposito"
                    value={planejamento.getIplanejamento().proposito} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                >
                </Textarea>

            </Item>

            <Item>
                <Label>Situação</Label>
                <Input 
                    type="checkbox"
                    name="situacao" 
                    id="situacao"
                    className="dt"
                    value={planejamento.getIplanejamento().situacao} 
                    onChange={( event)=>{handlePlanejamento( event.target)}}
                />

            </Item>

            <Row>

                <Button>Salvar</Button>
                <Button>Gravar</Button>

            </Row>
        
        
        </Column>



        </section>

    )


}

export default FormPlanejamento;