import Planejamento from "../../model/planejamento/planejamento"
import Button from "../elements/button"
import Column from "../elements/div-column"
import Input from "../elements/input"
import Item from "../elements/item"
import Label from "../elements/label"
import Row from "../elements/row"
import Textarea from "../elements/textarea"


interface PropsFormPlanejamento{
    planejamento        :   Planejamento;
    setPlanejamento     :   React.Dispatch<React.SetStateAction<Planejamento>>
    setIeAtualiza       :   React.Dispatch<React.SetStateAction<boolean>>;
}


const FormPlanejamento=({setIeAtualiza, planejamento, setPlanejamento}:PropsFormPlanejamento)=>{


    let codigo          =  document.querySelector('Input[name=codigo]') as HTMLInputElement;
    let codigo_empresa  =  document.querySelector('Input[name=codigo_empresa]') as HTMLInputElement;
    let descricao       =  document.querySelector('Input[name=descricao]') as HTMLInputElement;
    let ano_inicio      =  document.querySelector('Input[name=ano_inicio]') as HTMLInputElement;
    let ano_fim         =  document.querySelector('Input[name=ano_fim]') as HTMLInputElement;
    let missao          =  document.querySelector('Textarea[name=missao]') as HTMLInputElement;
    let visao           =  document.querySelector('Textarea[name=visao]') as HTMLInputElement;
    let valores         =  document.querySelector('Textarea[name=valores]') as HTMLInputElement;
    let proposito       =  document.querySelector('Textarea[name=proposito]') as HTMLInputElement;
    let situacao        =  document.querySelector('Input[name=situacao]') as HTMLInputElement;


    const handleBtnSalvar = () => {


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
            situacao:       situacao.checked === true ? 'A' : 'I'
        }

        

        const planejamento :  Planejamento =  Planejamento.setPlanejamento(iplanejamento);
        
        //new Planejamento(codigo.value, codigo_empresa.value , descricao.value, ano_inicio.value , ano_fim.value, missao.value, visao.value, valores.value , proposito.value, situacao.checked === true ? 'A' : 'I' ); 
        setIeAtualiza(true)
        planejamento.gravaPlanejamento()
        
        
        //setPlanejamento( )
        console.log(planejamento)



    }

    const handlePlanejamento=(target: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement)=>{



        const iplanejamento ={
            codigo:         target.name    === 'codigo' ? target.value  :  codigo.value ,
            codigo_empresa: target.name    === 'codigo_empresa' ? target.value  :codigo_empresa.value,
            descricao:      target.name    === 'descricao' ? target.value  :descricao.value,
            ano_inicio:     target.name    === 'ano_inicio' ? target.value  :ano_inicio.value,
            ano_fim:        target.name    === 'ano_fim' ? target.value  :ano_fim.value,
            missao:         target.name    === 'missao' ? target.value  :missao.value,
            visao:          target.name    === 'visao' ? target.value  :visao.value,
            valores:        target.name    === 'valores' ? target.value  :valores.value,
            proposito:      target.name    === 'proposito' ? target.value  :proposito.value,
            situacao:       target.name    === 'situacao' ? target.value  :situacao.checked === true ? 'A' : 'I'
        }

        setPlanejamento( Planejamento.setPlanejamento(iplanejamento) )


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

                <Button
                    onClick={handleBtnSalvar}
                >Salvar</Button>
                <Button>Gravar</Button>

            </Row>
        
        
        </Column>



        </section>

    )


}

export default FormPlanejamento;