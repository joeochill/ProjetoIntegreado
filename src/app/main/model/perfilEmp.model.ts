export class PerfilEmp{
    constructor(
        public id: string,
        public instituicao: string,
        public cnpj: string,
        public telefone: string,
        public endereco: string,
        public cep: string,
        public tipoEmp: string,
        public complemento: string,
        public numero: string,
        public cuidade: string,
        public barrio: string,
        public email: string,
        public descricao: string
    ){}
}