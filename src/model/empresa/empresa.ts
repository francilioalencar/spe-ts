import Iempresa from "./iempresa"

import  requestPut  from "../../dataFetch/dataFetchEmpresa";


export default class Empresa{

    constructor(

        private _codigo         : string,
        private _descricao      : string,
        private _areaAtuacao    : string,
        private _tipo           : string,
        private _cnpj           : string,
        private _cpf            : string,
        private _situacao       : string,
    
    ){

     }



    public setCodigo(codigo: string):void{
        this._codigo = codigo;
    }

    public cadastrarEmpresa(): void{

    }


    public inativarEmpresa():void{

    }

    async atualizarEmpresa(): Promise<boolean>{


        const estabelecimento={

            codigo : this._codigo,
            descricao: this._descricao,
            area_atuacao: this._areaAtuacao,
            tipo: this._tipo,
            cnpj: this._cnpj,
            cpf: this._cpf,
            situacao: this._situacao
    

        }
        const post = await requestPut.requestPut ( '/estabelecimento', estabelecimento)


        console.log( post.codigo );


        return post?.codigo? true : false;
        



        
    }



    public iempresa() : Iempresa{
        const iemp : Iempresa ={
            codigo: this._codigo,
            descricao: this._descricao,
            area_atuacao: this._areaAtuacao,
            tipo: this._tipo,
            cnpj: this._cnpj,
            cpf: this._cpf,
            situacao: this._situacao
        }
        
        return iemp;
    }


        


}