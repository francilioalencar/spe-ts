import PessoaFisica from "../pessoaFisica/pessoaFisica";

export default class Usuario extends PessoaFisica{

    private nmUsuario       :   string;
    private dsSenha         :   string;
    private ieAtivo         :   string;
   

    constructor(
        nome            : string, 
        dataNascimento  : Date, 
        cpf             : string, 
        email           : string, 
        nrTelefone      : string ,
        nmUsuario       :   string,
        dsSenha         :   string,
        ieAtivo         :   string
       
    ){
        super(
            nome, 
            dataNascimento, 
            cpf, 
            email, 
            nrTelefone 
        );
        this.nmUsuario  =   nmUsuario;
        this.dsSenha    =   dsSenha;
        this.ieAtivo    =   ieAtivo

    }






}