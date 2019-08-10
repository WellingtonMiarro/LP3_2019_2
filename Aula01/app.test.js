const requisicao = require('supertest');
const app = require('./app')
//conjunto de teste
describe('Testa o serviço de inversão de strings', ()=>{
    test('Deve retornar a string original de forma invertida', async()=>{ //nao posso definir o aweit enquanto nao colocar na funcao async

        let string = 'animal';
        /**
         * Realiza requisição ao serviço de inversao de strings passando a palavra "animal" como parâmetro.
         * A resposta do serviço (httpResponse) será armazenada na variavel "resposta".
         * 
         * await = espera ai moço!
         */
        let resposta = await requisicao(app).get(`/inverte/${string}`);

        //representa o corpo da resposta  (o resultado pode ter qualquer nome)
       // let resultado = resposta.body.resultado;

        //Aqui o nome tem que ser exato
       let { resultado } = resposta.body;

        /**
         * Espero que o valor da variavel resultado seja igual a lamina
         */
       expect(resultado).toBe('lamina');

       string = 'b';
       resposta = await requisicao(app).get(`/inverte/${string}`);
       //resultado = resposta.body.resultado;
       ({ resultado } = resposta.body);
       expect(resultado).toBe('b');


    });
});

describe('Testar o serviço de validação de CPFs', ()=>{
    test('Deve retornar True ao receber um CPF válido.', async()=>{
        const cpfsValidos = [
            '14655340673',
            '32340747554',
            '40317041355',
            '23811800795',
            '78606432431',
            '65157628013'
        ];
        for(let i = 0; i < cpfsValidos.length; i++){
            let resposta = await requisicao(app).get(`/cpf/${cpfsValidos[i]}`)
            let {valido}= resposta.body;
            expect(valido).toBe(true);
        }
    }); 
    test('Deve retornar false ao receber um CPF inválido.', async()=>{
        const cpfsInvalidos = [
            '35676926313',
            '44222502134',
            '84136524213',
            '00000000000',
            '1234',
            '11111111111'
        ];
        for(let i = 0; i < cpfsInvalidos.length; i++){
            let resposta = await requisicao(app).get(`/cpf/${cpfsInvalidos[i]}`);
            let { valido }= resposta.body;
            expect(valido).toBe(false);
        }
    }); 
    
});