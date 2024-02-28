import Iplanejmento from "./iplanejamento";

class Planejamento{



    constructor(
        private _codigo:            string,
        private _codigo_empresa:    string,
        private _descricao:         string,
        private _ano_inicio:        string,
        private _ano_fim:           string,
        private _missao:            string,
        private _visao:             string,
        private _valores:           string,
        private _proposito:         string,
        private _situacao:          string

    ){}


    public gravaPlanejamento(){

    }

    public getIplanejamento() :Iplanejmento{
        const iplanejamento ={
            codigo:         this._codigo,
            codigo_empresa: this._codigo_empresa,
            descricao:      this._descricao,
            ano_inicio:     this._ano_inicio,
            ano_fim:        this._ano_fim,
            missao:         this._missao,
            visao:          this._visao,
            valores:        this._valores,
            proposito:      this._proposito,
            situacao:       this._situacao
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
                iplanejamento.ano_fim,
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