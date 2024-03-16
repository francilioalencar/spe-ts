import { wait } from "@testing-library/user-event/dist/utils";
import DataFetchPlanejamento from "../../dataFetch/dataFetchPlanejamento";
import Iplanejmento from "./iplanejamento";

class Planejamento{



    constructor(
        private codigo:            string,
        private codigo_empresa:    string,
        private descricao:         string,
        private ano_inicio:        string,
        private ano_fim:           string,
        private missao:            string,
        private visao:             string,
        private valores:           string,
        private proposito:         string,
        private situacao:          string

    ){}


    async gravaPlanejamento(){

        const requestPost= new DataFetchPlanejamento('planejamento', this.getIplanejamento());
        console.log( requestPost.sendPost() );


    }

    public getIplanejamento() :Iplanejmento{
        const iplanejamento ={
            codigo:         this.codigo,
            codigo_empresa: this.codigo_empresa,
            descricao:      this.descricao,
            ano_inicio:     this.ano_inicio,
            ano_fim:        this.ano_fim,
            missao:         this.missao,
            visao:          this.visao,
            valores:        this.valores,
            proposito:      this.proposito,
            situacao:       this.situacao
        }

        console.log('2: '+iplanejamento)

        return iplanejamento;
    }



    static setPlanejamento  (
        iplanejamento:  Iplanejmento

    ){

        const exp = /-/g;
        const planejamento = new Planejamento(
                iplanejamento.codigo,
                iplanejamento.codigo_empresa,
                iplanejamento.descricao,
                iplanejamento.ano_inicio,
                iplanejamento.ano_fim,
                iplanejamento.missao,
                iplanejamento.visao,
                iplanejamento.valores,
                iplanejamento.proposito,
                iplanejamento.situacao
                
            )
            console.log('1: '+planejamento)
        return planejamento;



    }
    



    


}

export default Planejamento;