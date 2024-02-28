import { error } from "console";
import Iempresa from "../model/empresa/iempresa";
import { wait } from "@testing-library/user-event/dist/utils";


const API_URL = process.env.REACT_APP_API_URL;

//'Authorization': `Bearer ${token}`

const requestPost = async (
    endPont : string,
    dados   : Iempresa,

) : Promise<any> =>{
    try{
        const post = await fetch( `${API_URL+endPont}` ,{
            method: 'Post',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( dados )
        })
        if(!post.ok)
            throw('Erro ao obter dados da API')

        return await post.json()

    }catch(error){
        console.log(error)
        return []
    }

}




const requestPut = async (
    endPont : string,
    dados   : Iempresa,

) : Promise<any> =>{
    try{
        const post = await fetch( `${API_URL+endPont}` ,{
            method: 'Put',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( dados )
        })
        if(!post.ok)
            throw('Erro ao obter dados da API')

        return await post.json()

    }catch(error){
        console.log(error)
        return []
    }

}



const requestGet = async (
    endPont : string
) : Promise  <any> =>{
    
    try{
        const response = await fetch(API_URL+endPont,{
            method: 'Get',
            headers: {
                'Content-type' : 'application/json'
            }
        })

        if(!response.ok){
            throw("Erro!");
        }
        return await response.json();
    }catch(error){
        console.log(error)
        return [];
    }
    
}


export default {requestPost, requestGet, requestPut} 