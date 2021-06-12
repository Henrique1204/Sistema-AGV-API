const mensagens = {
    '400': 'Dados incompletos.',
    '401': 'Token não informado.',
    '403': 'Você não tem autorização necessária para continuar.',
    '404': 'Dados não encontrados.',
    '406': 'Dados inválidos.',
    '422': 'Informações já existem no banco de dados.',
    '502': 'Erro ao salvar ou buscar dados.'
};

type Mensagens = typeof mensagens;
type codigoAPI = keyof Mensagens;

export class ExceptionAPI {
    public tipo = 'API';

    constructor(
        public cod: codigoAPI,
        public mensagem = mensagens[cod]
    ) {}
};
