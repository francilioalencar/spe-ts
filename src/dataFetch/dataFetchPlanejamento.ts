import Iplanejmento from "../model/planejamento/iplanejamento";

class DataFetchPlanejamento{


    private API_URL = process.env.REACT_APP_API_URL;

    constructor(

        private _endPoint    : string,
        private _dadosBody   ?: Iplanejmento,
        private _dsToken     ?:   string

    ){

    }



    async sendGet ():Promise<any>{

        console.log(`--->${this.API_URL}/${this._endPoint}`)
        try{

        const response = await fetch( `${this.API_URL}/${this._endPoint}`, 
            {
                headers:{
                    'Content-Type': 'application/json'
                },
                method:'get',

            }
        );

        if(!response.ok)
            throw('Erro ao obter dados da API exec')
        else

        return await response.json();
        }catch(Error){
            throw('Erro ao obter dados da API final')
        }

    }




}


export default DataFetchPlanejamento;