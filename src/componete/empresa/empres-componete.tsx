import Empresa from '../../model/empresa/empresa';
import Iempresa from '../../model/empresa/iempresa';

import Input from '../elements/input';
import Label from '../elements/label';
import Button from '../elements/button';
import Column from '../elements/div-column';
import Row from '../elements/row';
import Select from '../elements/select';






interface IempresaProps {
    iempresa    ?:  Iempresa;
    empresa      :  Empresa;
    setEmpresa : React.Dispatch<React.SetStateAction<Empresa>>;
    setIeAtualizaLista:React.Dispatch<React.SetStateAction<boolean>>;


    
    
}




const EmpresaView =({iempresa, empresa, setEmpresa, setIeAtualizaLista}: IempresaProps)=>{

    


    let inputCodigo         = document.querySelector('input[name=codigo]')          as HTMLInputElement;
    let inputDescricao      = document.querySelector('input[name=descricao]')       as HTMLInputElement;
    let inputAreaAtucao     = document.querySelector('select[name=area_atuacao]')    as HTMLInputElement;
    //let inputTipo           = document.querySelector('input[name=tipo]')            as HTMLInputElement;
    let inputCnp            = document.querySelector('input[name=cnpj]')            as HTMLInputElement;
    let inputCpf            = document.querySelector('input[name=cpf]')             as HTMLInputElement;
    let inputSituacao       = document.querySelector('input[name=situacao]')             as HTMLInputElement;
  

    const handleBtnGravar= async()=>{

        let emp    =   new Empresa(
                inputCodigo.value, 
                inputDescricao.value, 
                inputAreaAtucao.value, 
                '',
                inputCnp.value,
                inputCpf.value,
                inputSituacao.checked ? 'A' : 'I'
                );
        console.log(emp)

        if((await emp.atualizarEmpresa()))
            setIeAtualizaLista(true);
       
      
    }

    const handleEmpresa = ( e : EventTarget & HTMLInputElement ) =>{
        

        setEmpresa(
            new Empresa(
                e.name === 'codigo'         ?  e.value :  empresa.iempresa().codigo, 
                e.name === 'descricao'       ?  e.value :  empresa.iempresa().descricao, 
                e.name === 'area_atuacao'   ?  e.value :  empresa.iempresa().area_atuacao, 
                '', 
                e.name === 'cnpj'       ?  e.value      :  empresa.iempresa().cnpj,
                e.name === 'cpf'        ?  e.value      :  empresa.iempresa().cpf,
                e.name === 'situacao'   ?  e.checked ? 'A' :'I'    :  empresa.iempresa().situacao
                
                ),
            

        )


    }
    


    return(
       <Column 
       
       >

            <form
                name='formEmpresa'
                
            >
                <Row 
                    width='100%'
                >
                    <Label className='label'>codigo</Label>
                    <Input 
                        
                        name="codigo" 
                        id="codigo" 
                        value={empresa.iempresa().codigo}
                        onChange={(event)=>{  handleEmpresa( event.target ) }}
                    />

                </Row>
                <Row 
                    width='100%'
                >
                    <Label 
                        
                    >Razão Social</Label>
                    <Input 
                        name="descricao" 
                        id="descricao" 
                        value={empresa.iempresa().descricao}
                        onChange={(event)=>{  handleEmpresa( event.target ) }}
                    />
                </Row>
                

                <Row 
                    width='100%'
                >
                    <Label>Setor</Label>
                    <Select 
                        name='area_atuacao' 
                        id='area_atuacao'
                        value={empresa.iempresa().area_atuacao}
                        
                    >
                        <option value={''}>Saúde</option>
                        <option value={''}>Tecnologia</option>
                        <option value={''}>Educação</option>
                    </Select>
                </Row>

                {/*                 
                No momento não será utilizado
                <Row 
                    width='100%'
                >
                    <Label className='label'>Tipo</Label>
                    <Input className='inputText' name="tipo" id="tipo" />
                </Row>
                
                */}

                <Row 
                    width='100%'
                >
                    <Label >CNPJ</Label>
                    <Input 
                        name="cnpj" 
                        id="cnpj" 
                        value={empresa.iempresa().cnpj}
                        onChange={(event)=>{  handleEmpresa( event.target ) }}    
                    />
                </Row>

                <Row 
                    width='100%'
                >
                    <Label>CPF</Label>
                    <Input 
                        name="cpf" 
                        id="cpf" 
                        value={empresa.iempresa().cpf}
                        onChange={(event)=>{  handleEmpresa( event.target ) }}    
                    />
                </Row>

                <Row 
                    width='100%'
                >
                    <Label>Ativo</Label>
                    <Input 
                        
                        width={'50px'}
                        type='checkbox'
                        name="situacao" 
                        id="situacao" 
                        value={empresa.iempresa().situacao}
                        onChange={(event)=>{  handleEmpresa( event.target ) }}    
                        checked={empresa.iempresa().situacao === 'A' ? true : false}
                    />
                </Row>

                
                <Row 
                    width='100%'
                >
                    <Button 
                        type='button'
                        onClick={handleBtnGravar} 
                    >Gravar</Button>
                </Row>
            
            </form>

               


        </Column>
    );


}

export default EmpresaView;